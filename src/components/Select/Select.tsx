import Trigger from "./Trigger";
import OptionList from "./OptionList";
import Option from "./Option";
import Input from "./Input";
import * as S from "./Select.styles";
import { ChangeEvent, ReactNode } from "react";
import { SelectContext } from "./Select.context";
import { useSelect } from "./Select.hooks";

export interface SelectProps {
  children: ReactNode;
  defaultValue?: string;
  itemList?: Array<string>;
  onSelect: (props: string) => void;
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Select = ({
  children,
  defaultValue,
  itemList,
  onSelect,
  onInputChange,
}: SelectProps) => {
  const { isOpen, option, setIsOpen, setOption } = useSelect({ defaultValue });

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        option,
        itemList,
        setOption,
        setIsOpen,
        onSelect,
        onInputChange,
      }}
    >
      <S.Container width="280px" height="56px">
        {children}
      </S.Container>
    </SelectContext.Provider>
  );
};

export default Select;

Select.Trigger = Trigger;
Select.OptionList = OptionList;
Select.Option = Option;
Select.Input = Input;
