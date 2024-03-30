import ModalLayout from "./Modal.layout";
import ModalPortal from "./Modal.portal";
import ModalHeader from "./Modal.header";
import ModalBody from "./Modal.body";
import ModalFooter from "./Modal.footer";
import { PropsWithChildren } from "react";
import { ModalContext } from "./Modal.context";

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      <ModalPortal>
        <ModalLayout>{children}</ModalLayout>
      </ModalPortal>
    </ModalContext.Provider>
  );
};

export default Modal;

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
