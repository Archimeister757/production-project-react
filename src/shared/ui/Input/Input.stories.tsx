import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Input } from "./Input";

const meta = {
  title: "shared/Input",
  component: Input,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
