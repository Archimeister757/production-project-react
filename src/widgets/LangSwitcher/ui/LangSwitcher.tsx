import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  isShort?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { t, i18n } = useTranslation();
  const { className, isShort } = props;

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      themes={[ButtonTheme.CLEAR, ButtonTheme.SECONDARY]}
      className={classNames("", {}, [className])}
      onClick={toggle}
    >
      {t(isShort ? "Короткий язык" : "Язык")}
    </Button>
  );
};
