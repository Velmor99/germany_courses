import ArrowIcon from '../../../../public/common/localization_arrow.svg';
import BurgerIcon from '../../../../public/common/burger.svg';
import CloseIcon from '../../../../public/common/close.svg';
import cn from 'classnames';
import styles from './BurgerMenuButton.module.scss';
import { BurgerButtonMenuProps } from './BurgerMenuButton.props';

const BurgerMenuButton = ({changeMenu, isShowed}: BurgerButtonMenuProps) => {
  return (
    <div className={cn(styles["menu-button"])}>
      <div className={cn(styles["menu-button__desktop"])}>
        <button className={cn(styles["menu-button__desktop-button"])}>
          <span className={cn(styles["menu-button__desktop-button-text"])}>Услуги</span>
          <div className={cn(
            styles["menu-button__desktop-button-icon"])}>
            <ArrowIcon />
          </div>
        </button>
      </div>
      <div className={cn(styles["menu-button__mobile"])}>
        <button onClick={changeMenu} className={cn(styles["menu-button__mobile-button"])}>
          {isShowed ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </div>
    </div>
  )
}

export default BurgerMenuButton;