import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import("./LoginForm")), 1500);
  }),
);

export default LoginFormAsync;
