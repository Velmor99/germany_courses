import Banner from "@/components/Banner/Banner";
import ContentWithPhoto from "@/components/ContentWithPhoto/ContentWithPhoto";
import FAQ from "@/components/FAQ/Faq";
import { FormComponent } from "@/components/Form/Form";
import GreenContentBlock from "@/components/GreenContentBlock/GreenContentBlock";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import styles from "./ResumePage.module.scss";

const ResumePageComponent = () => {
  return (
    <>
      <section className={styles["resume-section"]}>
        <Banner greenContent={true} bannerName="resume_banner" />
      </section>
      <section>
        <GreenContentBlock content={"resume_green_content"} revers={false} />
      </section>
      <section>
        <ContentWithPhoto partOne="resume_content_with_photo_part_one" partTwo="resume_content_with_photo_part_two" />
      </section>
      <section>
        <FAQ faqType="FAQ_resume" />
      </section>
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
