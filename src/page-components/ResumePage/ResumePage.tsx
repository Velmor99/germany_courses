import FAQ from "@/components/FAQ/Faq";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";


const ResumePageComponent = () => {
  return (
    <>
      <section>
        <FAQ faqType="FAQ_resume" />
      </section>
      <section>
        <Pricing price={"15"} perLesson={true} />
      </section>
      <section>
        <HowItWorks title="how_is_it_going" dataString="resume_how_it_works" />
      </section>
    </>
  )
}

export default ResumePageComponent;