import { memo, ReactNode, useLayoutEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: ReactNode;
  containerId: string;
};

export const Portal = memo(function Portal({
  children,
  containerId = '',
}: PortalProps) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();
  const container = useMemo(
    () => document.createElement('div'),
    [],
  ) as HTMLElement;

  useLayoutEffect(() => {
    const target = document?.body;
    container.id = containerId;
    container.style.position = 'fixed';
    container.style.top = '0px';
    container.style.left = '0px';
    target?.appendChild(container);
    setWrapperElement(container);
    return () => {
      target?.removeChild(container);
    };
  }, [containerId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
});
