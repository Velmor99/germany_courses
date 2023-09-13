import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/Faq";
import { FormComponent } from "@/components/Form/Form";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import styles from "./ResumePage.module.scss";

const ResumePageComponent = () => {
  return (
    <>
      <section className={styles["resume-section"]}>
        <Banner greenContent={true} bannerName="resume_banner" />
      </section>
      {/* <section>
        <FAQ faqType="FAQ_resume" />
      </section> */}
      {/* <section>
        <Pricing price={"59"} perLesson={true} />
      </section> */}
      <section>
        <HowItWorks title="how_it_works" dataString="resume_how_it_works" />
      </section>
      <section>
        <FormComponent styleType="white" title="form.title_for_resume" />
      </section>
    </>
  );
};

export default ResumePageComponent;
