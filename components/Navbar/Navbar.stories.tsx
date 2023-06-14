import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Home: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
};

export const Category: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/categories/카페",
      },
    },
  },
};

export const Brand: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/brands/스타벅스",
      },
    },
  },
};

export const Item: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/items/아메리카노",
      },
    },
  },
};

export const Contact: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/contacts",
      },
    },
  },
};
