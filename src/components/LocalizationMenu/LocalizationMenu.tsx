import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import styles from "./LocalizationMenu.module.scss";
import cn from "classnames";
import { routes } from "../../../routes";
import { LocalizationProps } from "./LocalizationMenu.props";
import LanguageIcon from "../../../public/common/language.svg";
import ArrowIcon from "../../../public/common/localization_arrow.svg";
// import { motion } from "framer-motion";

// const list = { hidden: { opacity: 0 } }

const LocalizationMenu = ({ classname }: LocalizationProps): JSX.Element => {
  const [isOpenLocalizationMenu, openLocalizationMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const changeLocalizationMenu = (value: boolean) => {
    openLocalizationMenu(value);
  };

  const transformLocaleToText = () => {
    switch (router.locale) {
      case routes.localization.en.route:
        return routes.localization.en.title;

      case routes.localization.de.route:
        return routes.localization.de.title;

      case routes.localization.ua.route:
        return routes.localization.ua.title;

      case routes.localization.ru.route:
        return routes.localization.ru.title;

      default:
        break;
    }
  };

  return (
    <div
      className={cn(styles["localization"], classname)}
      onMouseEnter={() => changeLocalizationMenu(true)}
      onMouseLeave={() => changeLocalizationMenu(false)}
    >
      <div className={cn(styles["localization__current-block"])}>
        <div className={cn(styles["localization__current-language-icon"])}>
          <LanguageIcon />
        </div>
        <span className={cn(styles["localization__current"])}>
          {transformLocaleToText()}
        </span>
        <div className={cn(styles["localization__current-arrow-icon"])}>
          <ArrowIcon />
        </div>
      </div>
      {isOpenLocalizationMenu && (
        <ul className={cn(styles["localization__list"])}>
          <li className={cn(styles["localization__list-item"])}>
            <Link
              replace={true}
              href={pathname}
              locale="en"
              className={cn(styles["localization__link"])}
            >
              {routes.localization.en.title}
            </Link>
          </li>
          <li className={cn(styles["localization__list-item"])}>
            <Link
              className={cn(styles["localization__link"])}
              replace={true}
              href={pathname}
              locale="de"
            >
              {routes.localization.de.title}
            </Link>
          </li>
          <li className={cn(styles["localization__list-item"])}>
            <Link
              className={cn(styles["localization__link"])}
              replace={true}
              href={pathname}
              locale="ua"
            >
              {routes.localization.ua.title}
            </Link>
          </li>
          <li className={cn(styles["localization__list-item"])}>
            <Link
              className={cn(styles["localization__link"])}
              replace={true}
              href={pathname}
              locale="ru"
            >
              {routes.localization.ru.title}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LocalizationMenu;
