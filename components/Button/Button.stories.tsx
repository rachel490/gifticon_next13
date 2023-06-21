import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta = {
  title: "Button",
  component: Button,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  args: {
    type: "button",
    children: "버튼",
    onClick: () => console.log("버튼 클릭함"),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
