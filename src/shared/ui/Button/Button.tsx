import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  themes?: ThemeButton[];
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, themes, ...otherProps } = props;

  const finalThemes = themes?.map((theme) => cls[theme]) || [];

  return (
    <button
      type="button"
      className={classNames(cls.button, {}, [className, ...finalThemes])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
