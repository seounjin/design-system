import { PropsWithChildren } from "react";

const ModalBody = ({ children }: PropsWithChildren) => {
  return <div id="modal-description">{children}</div>;
};

export default ModalBody;
