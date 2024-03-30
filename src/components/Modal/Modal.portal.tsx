import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: PropsWithChildren) => {
  const container = document.getElementById("modal");

  if (container === null) {
    return null;
  }

  return createPortal(children, container);
};

export default ModalPortal;
