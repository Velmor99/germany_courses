import { FormComponent } from "@/components/Form/Form";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import IndividualBanner from "@/components/IndividualBanner/IndividualBanner";

const ConsultationPage = () => {
  return (
    <>
      <section>
        <IndividualBanner
          text="consultation_banner_text"
          title="consultation_banner_title"
          buttonText="consultation_banner_button"
          where="consultation"
        />
      </section>
      <section>
        <HowItWorks
          title="how_it_works"
          dataString="consultation_how_it_works"
        />
      </section>
      <section>
        <FormComponent styleType="white" title="form.title_for_consultation" />
      </section>
    </>
  );
};

export default ConsultationPage;
