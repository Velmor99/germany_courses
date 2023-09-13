import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BannerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  classname?: string;
  bannerName: "main_banner" | "resume_banner" | "speaking_club_banner" | "documents_banner" | "students_banner" | "prepare_to_test_banner" | "consultation_banner";
  greenContent: boolean;
}