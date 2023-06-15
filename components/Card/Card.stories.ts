import { Meta, StoryObj } from "@storybook/react";
import { lastSaleListMockData, menuItemMockData, menuListMockData } from "./Card.mock";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  argTypes: {
    type: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const MenuListItemCard: Story = {
  args: {
    type: "menuListItem",
    data: menuListMockData[0],
  },
};

export const LastSaleItemCard: Story = {
  args: {
    type: "lastSaleItem",
    data: lastSaleListMockData[0],
  },
};

export const MenuDetailItemCard: Story = {
  args: {
    type: "menuDetailItem",
    data: menuItemMockData,
  },
};
