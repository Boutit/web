import { ReactNode } from 'react';
import Overlay from '../overlay/Overlay';
import ModalWrapper from './ModalWrapper';

type FullscreenModalBaseProps = {
  children?: ReactNode;
  visible?: boolean;
  zIndex?: number;
};

export type FullscreenModalProps = FullscreenModalBaseProps;

export default function FullscreenModal(props: FullscreenModalProps) {
  const { visible, zIndex } = props;
  return (
    <ModalWrapper visible={visible} zIndex={zIndex}>
      <Overlay />
    </ModalWrapper>
  );
}
