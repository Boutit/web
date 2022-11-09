import { ReactNode } from 'react';
import { Box } from '../../layout/Box';
import { Portal } from './Portal';

type ModalWrapperBaseProps = {
  children: ReactNode;
  visible?: boolean;
  zIndex?: number;
};

const modalContainerId = 'modalContainerId';

export type ModalWrapperProps = ModalWrapperBaseProps;

export default function ModalWrapper(props: ModalWrapperProps) {
  const { children, visible, zIndex } = props;
  return (
    <>
      {visible && (
        <Portal containerId={modalContainerId}>
          <Box
            position="absolute"
            height="100vh"
            width="100vw"
            justifyContent="center"
            alignItems="center"
            zIndex={zIndex}
            bordered
          >
            {children}
          </Box>
        </Portal>
      )}
    </>
  );
}
