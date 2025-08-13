import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import { AppLink, AppLinkTheme } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Link",
    to: "/",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};
export const Primary_dark_theme: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};
export const Red: Story = {
  args: {
    theme: AppLinkTheme.RED,
  },
};
