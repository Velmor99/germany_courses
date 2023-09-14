import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface GreenContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  content:
    | "main_green_content"
    | "resume_green_content"
    | "speaking_club_green_content"
    | "documents_green_content"
    | "students_green_content"
    | "prepare_to_test_green_content"
    | "consultation_green_content";
    revers: boolean;
}
