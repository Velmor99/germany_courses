import Banner from "@/components/Banner/Banner";
import { FormComponent } from "@/components/Form/Form";
import HowItWorks from "@/components/HowItWorks/HowItWorks";

const StudentsPage = () => {
  return (
    <>
      <section>
        <Banner greenContent={false} bannerName="students_banner" />
      </section>
      <section>
        <HowItWorks title="how_it_works" dataString="students_how_it_works" />
      </section>
      <section>
        <FormComponent styleType="white" title="form.title_for_students" />
      </section>
    </>
  );
};

export default StudentsPage;
