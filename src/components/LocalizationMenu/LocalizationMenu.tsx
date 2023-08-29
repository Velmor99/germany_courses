import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import styles from "./LocalizationMenu.module.scss";
import cn from "classnames";
import { routes } from "../../../routes";
import { LocalizationProps } from "./LocalizationMenu.props";
// import { motion } from "framer-motion";

// const list = { hidden: { opacity: 0 } }

const LocalizationMenu = ({ classname }: LocalizationProps): JSX.Element => {
  const [isOpenLocalizationMenu, openLocalizationMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const changeLocalizationMenu = (value: boolean) => {
    openLocalizationMenu(value);
  };

  return (
    <div
      className={cn(styles["localization"], classname)}
      onMouseEnter={() => changeLocalizationMenu(true)}
      onMouseLeave={() => changeLocalizationMenu(false)}
    >
      <p className={cn(styles["localization__current"])}>{router.locale}</p>
      {isOpenLocalizationMenu && (
        <ul className={cn(styles["localization__list"])}>
            <li className={cn(styles["localization__list-item"])}>
              <Link
                replace={true}
                href={pathname}
                locale="en"
                className={cn(styles["localization__link"])}
              >
                {routes.localization.en}
              </Link>
            </li>
            <li className={cn(styles["localization__list-item"])}>
              <Link
                className={cn(styles["localization__link"])}
                replace={true}
                href={pathname}
                locale="de"
              >
                {routes.localization.de}
              </Link>
            </li>
            <li className={cn(styles["localization__list-item"])}>
              <Link
                className={cn(styles["localization__link"])}
                replace={true}
                href={pathname}
                locale="ua"
              >
                {routes.localization.ua}
              </Link>
            </li>
            <li className={cn(styles["localization__list-item"])}>
              <Link
                className={cn(styles["localization__link"])}
                replace={true}
                href={pathname}
                locale="ru"
              >
                {routes.localization.ru}
              </Link>
            </li>
        </ul>
      )}
    </div>
  );
};

export default LocalizationMenu;
