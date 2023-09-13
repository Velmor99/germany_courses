import { useTranslation } from "next-i18next";
import { FormComponent } from "@/components/Form/Form";
import styles from "./MainPage.module.scss";
import DeutchEducation from "@/components/DeutchEducation/DeutchEducation";
import IndividualBanner from "@/components/IndividualBanner/IndividualBanner";
import AdvantagesSpeakingClub from "@/components/AdvantagesSpeakingClub/AdvantagesSpeakingClub";
import AdditionalServices from "@/components/AdditionalServices/AdditionalServices";

const MainPageComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <IndividualBanner
          title="main_banner_title"
          text="main_banner_text"
          buttonText="main_banner_button"
          where="main"
        />
      </section>
      <section>
        <AdvantagesSpeakingClub where="main" />
      </section>
      <section>
        <AdditionalServices />
      </section>
      <section>
        <DeutchEducation />
      </section>
      <section className={styles["main-page__background"]}>
        <FormComponent title={t("form.title_for_main")} styleType="green" />
      </section>
    </>
  );
};

export default MainPageComponent;
