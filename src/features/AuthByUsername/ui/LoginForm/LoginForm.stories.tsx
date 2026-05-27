import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
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

export const Default: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "admin",
        password: "123",
      },
    }),
  ],
};
export const DarkTheme: Story = {
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
export const WithError: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "admin",
        password: "123",
        error: "Вы ввели неверный логин или пароль",
      },
    }),
  ],
};
export const WithLoading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "admin",
        password: "123",
        isLoading: true,
      },
    }),
  ],
};
