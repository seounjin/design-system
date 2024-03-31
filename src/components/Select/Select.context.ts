import { ChangeEvent, Dispatch, SetStateAction, createContext } from "react";

export interface SelectContextTypes {
  isOpen: boolean;
  option: string;
  itemList?: Array<string>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setOption: Dispatch<SetStateAction<string>>;
  onSelect: (props: string) => void;
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SelectContext = createContext<SelectContextTypes | null>(null);
