import * as S from "./Select.styles";
import { ReactNode } from "react";
import { useSelectContext } from "./Select.hooks";
import useId from "../../hooks/useId";

export interface OptionProps {
  children?: ReactNode;
  value: string;
}

const Option = ({ children, value }: OptionProps) => {
  const id = useId();

  const { setIsOpen, setOption, onSelect } = useSelectContext();

  const handleOption = () => {
    setOption(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <S.OptionItem id={`listbox-option-${id}`} onMouseDown={handleOption}>
      {children}
    </S.OptionItem>
  );
};

export default Option;
