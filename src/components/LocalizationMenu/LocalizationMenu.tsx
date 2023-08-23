import Link from 'next/link';
import { useState } from 'react';
import styles from './LocalizationMenu.module.scss';
import cn from 'classnames';
import { routes } from '../../../routes';
import { LocalizationProps } from './LocalizationMenu.props';

const LocalizationMenu = ({classname}: LocalizationProps): JSX.Element => {
  const [isOpenLocalizationMenu, openLocalizationMenu] = useState(false);

  const changeLocalizationMenu = (value: boolean) => {
    openLocalizationMenu(value);
  };

  return (
    <div className={cn(styles["localization"], classname)}
      onMouseEnter={() => changeLocalizationMenu(true)}
      onMouseLeave={() => changeLocalizationMenu(false)}>
      <p className={cn(styles["localization__current"])}>
        {/*TODO Dynamic localization */}
        {"ru"}
      </p>
      {isOpenLocalizationMenu && (
        <ul className={cn(styles["localization__list"])}>
          <li className={cn(styles["localization__list-item"])}>
            <Link className={cn(styles["localization__link"])} replace={true} href={"/" + routes.localization.en}>
              {routes.localization.en}
            </Link>
          </li>
          <li className={cn(styles["localization__list-item"])}>
            <Link className={cn(styles["localization__link"])} replace={true} href={"/" + routes.localization.de}>
              {routes.localization.de}
            </Link>
          </li>
          <li className={cn(styles["localization__list-item"])}>
            <Link className={cn(styles["localization__link"])} replace={true} href={"/" + routes.localization.ua}>
              {routes.localization.ua}
            </Link>
          </li>
          <li className={cn(styles["localization__list-item"])}>
            <Link className={cn(styles["localization__link"])} replace={true} href={"/" + routes.localization.ru}>
              {routes.localization.ru}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LocalizationMenu;