import { ChangeEvent, useEffect, useState } from "react";
import { useSelectContext } from "./Select.hooks";
import { StyledInput } from "./Select.styles";

const Input = () => {
  const [value, setValue] = useState<string>("");
  const { option, setIsOpen, onInputChange } = useSelectContext();

  useEffect(() => {
    setValue(option);
  }, [option]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (onInputChange) {
      onInputChange(event);
    }

    setValue(inputValue);
  };

  return (
    <StyledInput
      value={value}
      onChange={onChange}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    />
  );
};

export default Input;
