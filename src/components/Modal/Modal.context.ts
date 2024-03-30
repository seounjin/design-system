import { createContext } from "react";

export interface SelectContextTypes {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalContext = createContext<SelectContextTypes | null>(null);
