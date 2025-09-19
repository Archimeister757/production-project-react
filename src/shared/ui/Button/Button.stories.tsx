import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import { Button, ButtonSize, ButtonTheme } from "./Button";

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
    themes: [ButtonTheme.PRIMARY],
  },
};
export const PrimaryThemeDark: Story = {
  args: {
    themes: [ButtonTheme.PRIMARY],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Secondary: Story = {
  args: {
    themes: [ButtonTheme.SECONDARY],
  },
};
export const Clear: Story = {
  args: {
    themes: [ButtonTheme.CLEAR],
  },
};
export const Outline: Story = {
  args: {
    themes: [ButtonTheme.OUTLINE],
  },
};
export const OutlineThemeDark: Story = {
  args: {
    themes: [ButtonTheme.OUTLINE],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const OutlineSizeL: Story = {
  args: {
    themes: [ButtonTheme.OUTLINE],
    size: ButtonSize.L,
  },
};
export const OutlineSizeXL: Story = {
  args: {
    themes: [ButtonTheme.OUTLINE],
    size: ButtonSize.XL,
  },
};
export const Background: Story = {
  args: {
    themes: [ButtonTheme.BACKGROUND],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const BackgroundInverted: Story = {
  args: {
    themes: [ButtonTheme.BACKGROUND_INVERTED],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Squared: Story = {
  args: {
    themes: [ButtonTheme.BACKGROUND_INVERTED],
    children: ">",
    isSquared: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const SquaredSizeL: Story = {
  args: {
    themes: [ButtonTheme.BACKGROUND_INVERTED],
    size: ButtonSize.L,
    children: ">",
    isSquared: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const SquaredSizeXL: Story = {
  args: {
    themes: [ButtonTheme.BACKGROUND_INVERTED],
    size: ButtonSize.XL,
    children: ">",
    isSquared: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
