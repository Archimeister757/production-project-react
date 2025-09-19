import { useState, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import cls from "./Sidebar.module.scss";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { t } from "i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/house.svg";
import MainIcon from "shared/assets/icons/list.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const onCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.link}
        >
          <MainIcon className={cls.linkIcon} />
          <span className={cls.linkText}>{t("Главная")}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={cls.link}
        >
          <AboutIcon className={cls.linkIcon} />
          <span className={cls.linkText}>{t("О сайте")}</span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={classNames(cls.lang, {}, [className])}
          isShort={collapsed}
        />
      </div>
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onCollapsed}
        className={cls.collapsedBtn}
        themes={[ButtonTheme.BACKGROUND_INVERTED]}
        size={ButtonSize.L}
        isSquared
      >
        {collapsed ? ">" : "<"}
      </Button>
    </div>
  );
};
