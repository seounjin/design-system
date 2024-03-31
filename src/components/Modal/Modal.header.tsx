import { PropsWithChildren } from "react";
import { Header } from "./Modal.styles";

const ModalHeader = ({ children }: PropsWithChildren) => {
  return <Header id="title-dialog">{children}</Header>;
};

export default ModalHeader;
