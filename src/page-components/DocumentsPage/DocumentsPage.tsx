import Banner from "@/components/Banner/Banner";
import { FormComponent } from "@/components/Form/Form";
import HowItWorks from "@/components/HowItWorks/HowItWorks";

const DocumentsPage = () => {
  return (
    <>
      <section>
        <Banner greenContent={false} bannerName="documents_banner" />
      </section>
      <section>
        <HowItWorks title="how_it_works" dataString="documents_how_it_works" />
      </section>
      <section>
        <FormComponent styleType="white" title="form.title_for_documents" />
      </section>
    </>
  );
};

export default DocumentsPage;
