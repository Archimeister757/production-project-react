import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clear-inverted",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background-inverted",
}

export enum ButtonSize {
  M = "size-m",
  L = "size-l",
  XL = "size-xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  themes?: ButtonTheme[];
  isSquared?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    themes,
    isSquared,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const finalThemes = themes?.map((theme) => cls[theme]) || [];

  const mods: Record<string, boolean> = {
    [cls.squared]: isSquared,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className, ...finalThemes])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
