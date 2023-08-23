import { useTranslation } from "next-i18next";
import Link from "next/link";
import styles from "./Footer.module.scss";
import cn from "classnames";
import Socials from "@/components/Socials/Socials";
import PaymentButton from "@/components/PaymentButton/ButtonComponent";
import LogoComponent from "@/components/Logo/Logo";
import PhoneIcon from "../../../public/socials/phone.svg";
import EmailIcon from "../../../public/socials/email.svg";
import { links, routes } from "../../../routes";

const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  const date = new Date();
  return (
    <footer className={cn(styles["footer"])}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["footer__content-top"])}>
          <ul className={cn(styles["footer__list"])}>
            <li className={cn(styles["footer__list-item"])}>
              <Link className={cn(styles["footer__link-text"])} href={routes.resume}>{t("footer_links.cv_writing")}</Link>
            </li>
            <li className={cn(styles["footer__list-item"])}>
              <Link className={cn(styles["footer__link-text"])} href={"/"}>{t("footer_links.contacts")}</Link>
            </li>
            <li className={cn(styles["footer__list-item"])}>
              <Link className={cn(styles["footer__link-text"])} href={routes.students}>
                {t("footer_links.admission_to_universities")}
              </Link>
            </li>
            <li className={cn(styles["footer__list-item"])}>
              <Link className={cn(styles["footer__link-text"])} href={routes.publicOffer}>{t("footer_links.public_offer")}</Link>
            </li>
            <li className={cn(styles["footer__list-item"])}>
              <Link className={cn(styles["footer__link-text"])} href={routes.prepareToTest}>
                {t("footer_links.prepare_to_technical_language_test")}
              </Link>
            </li>
            <li className={cn(styles["footer__list-item"])}>
              <Link className={cn(styles["footer__link-text"])} href={routes.privacyPolicy}>{t("footer_links.privacy_policy")}</Link>
            </li>
            <li className={cn(styles["footer__list-item"])}>
              <Link className={cn(styles["footer__link-text"])} href={routes.speakingClub}>{t("footer_links.conversational_club")}</Link>
            </li>
            <li className={cn(styles["footer__list-item"])}>
              <Link className={cn(styles["footer__link-text"])} href={routes.freeCourse}>{t("footer_links.free_information_course")}</Link>
            </li>
            <li className={cn(styles["footer__list-item"])}>
              <Link className={cn(styles["footer__link-text"])} href={routes.documents}>{t("footer_links.preparing_documents")}</Link>
            </li>
            <li className={cn(styles["footer__list-item"])}>
              <Link className={cn(styles["footer__link-text"])} href={routes.consultation}>{t("footer_links.personal_consultation")}</Link>
            </li>
          </ul>
          <div>
            <div className={cn(styles["footer__socials"])}>
              <Socials iconsType="white" />
            </div>
            {/**TODO width button 226 */}
            <PaymentButton classname={cn(styles["footer__payment-footer"])} apperance="payment">
              {t("payment_button")}
            </PaymentButton>
          </div>
        </div>

        <div className={cn(styles["footer__content-bottom"])}>
          <div className={cn(styles["footer__logo"])}>
            <LogoComponent logoType="white" />
            <span className={cn(styles["footer__copyright"])}>© Copyright {date.getFullYear()} WeLingua</span>
          </div>
          <div className={cn(styles["footer__email"])}>
            <a className={cn(styles["footer__contacts-link"])} href={links.email}>
              <div>
                <EmailIcon />
              </div>
              <span className={cn(styles["footer__bottom-link"])}>weinfo@welingua.com</span>
            </a>
          </div>
          <div className={cn(styles["footer__phone"])}> 
            <a className={cn(styles["footer__contacts-link"])} href={links.phone}>
              <div>
                <PhoneIcon />
              </div>
              <span className={cn(styles["footer__bottom-link"])}>+49 6221 825 96 40</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
