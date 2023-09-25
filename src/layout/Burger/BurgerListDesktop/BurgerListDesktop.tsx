import styles from './BurgerListDesktop.module.scss';
import cn from 'classnames';
import {routes} from '../../../../routes';
import Link from 'next/link';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const navLinks = [
  {link: routes.main, name: "footer_links.language_school"},
  {link: routes.resume, name: "footer_links.cv_writing"},
  {link: routes.prepareToTest, name: "footer_links.prepare_to_technical_language_test"},
  {link: routes.students, name: "footer_links.admission_to_universities"},
  {link: routes.consultation, name: "footer_links.personal_consultation"},
  {link: routes.speakingClub, name: "footer_links.conversational_club"},
  {link: routes.freeCourse, name: "footer_links.free_information_course"},
  {link: routes.documents, name: "footer_links.preparing_documents"},
]

const BurgerListDesktop = () => {
  const {t} = useTranslation()
  const router = useRouter();
  return (
    <ul className={styles["nav__menu"]}>
      {navLinks.map((item, index) => 
      <li key={index}>
        <Link className={cn(styles["nav__link"], {
          [styles["nav__link-active"]]: router.pathname === item.link
        })} href={item.link}>{t(item.name)}</Link>
      </li>
      )}
    </ul>
  )
}

export default BurgerListDesktop;