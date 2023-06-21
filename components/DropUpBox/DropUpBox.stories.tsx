/* eslint-disable no-shadow */
import { Meta, StoryObj } from "@storybook/react";
import DropUpBox from "./DropUpBox";

const OptionsMock = [
  {
    count: "2024",
    expireAt: "2023-07-28T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "1616",
    expireAt: "2023-07-29T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "1110",
    expireAt: "2023-07-30T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "491",
    expireAt: "2023-07-31T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "925",
    expireAt: "2023-08-01T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "34",
    expireAt: "2023-08-02T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "319",
    expireAt: "2023-08-04T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "302",
    expireAt: "2023-08-06T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "598",
    expireAt: "2023-08-07T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "2471",
    expireAt: "2023-08-08T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "101",
    expireAt: "2023-08-09T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "214",
    expireAt: "2023-08-10T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "709",
    expireAt: "2023-08-11T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "853",
    expireAt: "2023-08-12T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "962",
    expireAt: "2023-08-13T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "181",
    expireAt: "2023-08-14T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
  {
    count: "3025",
    expireAt: "2023-08-15T00:00:00+09:00",
    sellingPrice: "3860",
    isSoonConItemOption: "false",
  },
];

const meta: Meta = {
  title: "DropUpBox",
  component: DropUpBox,
  args: {
    data: OptionsMock,
  },
};

export default meta;

type Story = StoryObj<typeof DropUpBox>;

export const Default: Story = {
  decorators: [
    Story => (
      <div
        style={{
          height: "calc(100vh - 8rem)",
          width: "100%",
          backgroundColor: "aliceblue",
          position: "relative",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
