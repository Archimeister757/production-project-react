import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { t } = useTranslation();
  const { className } = props;
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t("Форма авторизации")}></Text>
      {error && (
        <Text
          theme={TextTheme.ERROR}
          text={t("Вы ввели неверный логин или пароль")}
        ></Text>
      )}
      <Input
        autofocus
        type="text"
        className={cls.loginInput}
        placeholder={t("Введите логин")}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={cls.loginInput}
        placeholder={t("Введите пароль")}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        themes={[ButtonTheme.OUTLINE]}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
