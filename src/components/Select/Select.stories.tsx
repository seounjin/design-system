import Select, { SelectProps } from "./Select";
import { Meta, StoryObj } from "@storybook/react";
import { StoryBookFlex } from "./Select.styles";
import { ChangeEvent, useState } from "react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState<string>("");
      const onSelect = (value: string) => {
        setValue(value);
      };

      const { args } = context;
      args.onSelect = onSelect;

      return (
        <StoryBookFlex>
          <label>선택한 옵션: {value}</label>
          {<Story onSelect={onSelect} />}
        </StoryBookFlex>
      );
    },
  ],
};

export default meta;

export const ExampleSelect: StoryObj<SelectProps> = {
  args: {},
  render: (args) => {
    return (
      <Select {...args}>
        <Select.Trigger />
        <Select.OptionList>
          <Select.Option value="React">React</Select.Option>
          <Select.Option value="Next.js">Next.js</Select.Option>
          <Select.Option value="TypeScript">TypeScript</Select.Option>
        </Select.OptionList>
      </Select>
    );
  },
};

const ITEM_LIST = ["React", "Next.js", "TypeScript"];

export const ExampleComboBox: StoryObj<SelectProps> = {
  args: {},
  render: (args) => {
    const [itemList, setItemList] = useState<Array<string>>(ITEM_LIST);
    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const filterItem = itemList.filter((item) => item === value);
      setItemList(filterItem.length > 0 ? filterItem : ITEM_LIST);
    };

    return (
      <Select {...args} itemList={ITEM_LIST} onInputChange={onInputChange}>
        <Select.Input />
        <Select.OptionList>
          {itemList.map((item) => (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select.OptionList>
      </Select>
    );
  },
};
