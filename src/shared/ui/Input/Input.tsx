import { FC, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type InputHTMLAttributesCustom = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends InputHTMLAttributesCustom {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input: FC<InputProps> = (props) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    autofocus,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.input, {}, [className])}>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
};
