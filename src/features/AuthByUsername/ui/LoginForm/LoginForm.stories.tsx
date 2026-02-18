import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { LoginForm } from "./LoginForm";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
