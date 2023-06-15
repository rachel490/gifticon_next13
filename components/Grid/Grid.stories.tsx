import { Meta, StoryObj } from "@storybook/react";
import { brandMockData, categoryMockData } from "./Grid.mock";
import Grid from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Grid",
  component: Grid,
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const CategoryGrid: Story = {
  args: {
    type: "category",
    data: categoryMockData,
  },
};

export const BrandGrid: Story = {
  args: {
    type: "brand",
    data: brandMockData,
  },
};
