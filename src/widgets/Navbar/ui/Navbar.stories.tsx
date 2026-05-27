import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import { Navbar } from "./Navbar";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "admin",
        password: "123",
      },
    }),
  ],
};
export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: {
        username: "admin",
        password: "123",
      },
    }),
  ],
};
