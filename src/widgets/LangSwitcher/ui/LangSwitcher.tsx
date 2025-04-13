import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { t, i18n } = useTranslation();
  const { className } = props;

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      themes={[ThemeButton.CLEAR, ThemeButton.SECONDARY]}
      className={classNames("", {}, [className])}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};
