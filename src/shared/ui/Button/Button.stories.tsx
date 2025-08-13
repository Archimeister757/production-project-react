import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import { Button, ThemeButton } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {}, // https://storybook.js.org/docs/configure/story-layout
  tags: ["autodocs"], // https://storybook.js.org/docs/writing-docs/autodocs
  argTypes: {}, // https://storybook.js.org/docs/api/argtypes
  args: {
    children: "Button",
  }, // https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    themes: [ThemeButton.PRIMARY],
  },
};
export const PrimaryThemeDark: Story = {
  args: {
    themes: [ThemeButton.PRIMARY],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Secondary: Story = {
  args: {
    themes: [ThemeButton.SECONDARY],
  },
};
export const Clear: Story = {
  args: {
    themes: [ThemeButton.CLEAR],
  },
};
export const Outline: Story = {
  args: {
    themes: [ThemeButton.OUTLINE],
  },
};
export const OutlineThemeDark: Story = {
  args: {
    themes: [ThemeButton.OUTLINE],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
