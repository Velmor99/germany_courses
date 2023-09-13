import Banner from "@/components/Banner/Banner";
import { FormComponent } from "@/components/Form/Form";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import PrepareToTestPricing from "@/components/PrepareToTestPricing/PrepareToTestPricing";
import styles from './PrepareToTestPage.module.scss';

const PrepareToTestPage = () => {
  return (
    <>
      <section>
        <Banner greenContent={false} bannerName="prepare_to_test_banner" />
      </section>
      <section>
        <HowItWorks
          title="how_it_works"
          dataString="prepare_to_test_how_it_works"
        />
      </section>
      <section className={styles["prepare_to_test-block"]}>
        <PrepareToTestPricing />
      </section>
      <section>
        <FormComponent
          styleType="white"
          title="form.title_for_prepare_to_test"
        />
      </section>
    </>
  );
};

export default PrepareToTestPage;
