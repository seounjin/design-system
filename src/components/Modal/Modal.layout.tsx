import { useModalContext } from "./Modal.hooks";
import * as S from "./Modal.styles";
import { PropsWithChildren } from "react";

interface ModalLayoutProps extends PropsWithChildren {}

const ModalLayout = ({ children }: ModalLayoutProps) => {
  const { isOpen, onClose } = useModalContext();

  return isOpen ? (
    <S.Layout>
      <S.Overlay onClick={onClose} />
      <S.Content>{children}</S.Content>
    </S.Layout>
  ) : null;
};

export default ModalLayout;
