import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Modal } from "./Modal";

const meta = {
  title: "widgets/Modal",
  component: Modal,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates, nemo maiores vero obcaecati accusantium. Odio dolorem eos culpa unde numquam pariatur quidem laudantium, accusamus saepe ex voluptates ullam. Suscipit.",
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
