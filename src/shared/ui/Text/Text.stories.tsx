import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Text, TextTheme } from "./Text";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Some title",
    text: "Some text Some text Some text",
  },
};
export const Error: Story = {
  args: {
    title: "Some title",
    text: "Some text Some text Some text",
    theme: TextTheme.ERROR,
  },
};
export const OnlyText: Story = {
  args: {
    text: "Some text Some text Some text",
  },
};
export const OnlyTitle: Story = {
  args: {
    title: "Some title",
  },
};
export const OnlyTextDark: Story = {
  args: {
    text: "Some text Some text Some text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const OnlyTitleDark: Story = {
  args: {
    title: "Some title",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const TextAndTitleDark: Story = {
  args: {
    title: "Some title",
    text: "Some text Some text Some text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
