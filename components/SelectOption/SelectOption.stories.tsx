import { Meta, StoryObj } from "@storybook/react";
import SelectOption from "./SelectOption";

const OptionMock = {
  count: "962",
  expireAt: "2023-08-13T00:00:00+09:00",
  sellingPrice: "3860",
  isSoonConItemOption: "false",
};

const discountRateMock = 14;

const meta: Meta = {
  title: "SelectOption",
  component: SelectOption,
  args: {
    data: OptionMock,
    discountRate: discountRateMock,
    onClick: () => {
      console.log("selected option");
    },
  },
};

export default meta;

type Story = StoryObj<typeof SelectOption>;

export const Default: Story = {};
