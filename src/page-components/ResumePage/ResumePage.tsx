import FAQ from "@/components/FAQ/Faq";
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
    </>
  )
}

export default ResumePageComponent;