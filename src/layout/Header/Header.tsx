import { useTranslation } from "next-i18next";
import cn from "classnames";
import PaymentButton from "@/components/PaymentButton/ButtonComponent";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import LogoComponent from "@/components/Logo/Logo";
import Socials from "@/components/Socials/Socials";
import LocalizationMenu from "@/components/LocalizationMenu/LocalizationMenu";

const Header = ({
  classname,
  ...props
}: HeaderProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <header className={cn(styles["header"])}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["header__content"])}>

          <div className={cn(styles["header__logo-container"])}>
            <LogoComponent logoType="black" />
          </div>

          <PaymentButton apperance="payment" classname={cn(styles["header__payment-button"])}>
            {t("payment_button")}
          </PaymentButton>

          <div className={cn(styles["header__socials"])}>
            <Socials iconsType="black" />
            <LocalizationMenu classname={cn(styles["header__localization"])} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
