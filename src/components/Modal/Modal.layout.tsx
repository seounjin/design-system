import { useModalContext } from "./Modal.hooks";
import * as S from "./Modal.styles";
import { PropsWithChildren } from "react";

interface ModalLayoutProps extends PropsWithChildren {}

const ModalLayout = ({ children }: ModalLayoutProps) => {
  const { isOpen, onClose } = useModalContext();

  return isOpen ? (
    <S.Layout
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <S.Overlay aria-hidden={true} onClick={onClose} />
      <S.Content role="document" tabIndex={-1}>
        {children}
      </S.Content>
    </S.Layout>
  ) : null;
};

export default ModalLayout;
