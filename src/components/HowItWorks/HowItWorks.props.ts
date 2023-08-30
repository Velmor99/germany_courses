import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HowItWorksProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: "how_to_order_service" | "how_it_works" | "how_is_it_going" | "how_to_order_consultation";
  className?: string;
  dataString: "resume_how_it_works" | "speaking_club_how_it_works" | "documents_how_it_works" | "students_to_test_how_it_works" | "prepare_to_test_how_it_works" | "consultation_how_it_works";
}