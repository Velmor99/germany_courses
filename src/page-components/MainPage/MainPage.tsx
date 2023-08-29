import { useTranslation } from "next-i18next";
import { FormComponent } from "@/components/Form/Form"
import styles from './MainPage.module.scss';


const MainPageComponent = () => {
  const { t } = useTranslation();
  return (
    <section className={styles["main-page__background"]}>
      <div className={styles["container"]}>
        <div className={styles["main-page__form-container"]}>
          <FormComponent title={t("form.title_for_main")} styleType="green" />
        </div>
      </div>
    </section>
  )
}

export default MainPageComponent;