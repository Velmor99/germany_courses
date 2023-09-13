import AdvantagesSpeakingClub from "@/components/AdvantagesSpeakingClub/AdvantagesSpeakingClub";
import Banner from "@/components/Banner/Banner";
import { FormComponent } from "@/components/Form/Form";
import HowItWorks from "@/components/HowItWorks/HowItWorks";

const SpeakingClubPage = () => {
  return (
    <>
      <section>
        <Banner greenContent={false} bannerName="speaking_club_banner" />
      </section>
      <section>
        <AdvantagesSpeakingClub where="speaking_club" />
      </section>
      <section>
        <HowItWorks
          title="how_it_works"
          dataString="speaking_club_how_it_works"
        />
      </section>
      <section>
        <FormComponent styleType="white" title="form.title_for_speaking_club" />
      </section>
    </>
  );
};

export default SpeakingClubPage;
