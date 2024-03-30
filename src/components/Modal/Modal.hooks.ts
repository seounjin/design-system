import { useContext } from "react";
import { ModalContext } from "./Modal.context";

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("컴포넌트에 필요한 컨텍스트가 없습니다.");
  }
  return context;
};
