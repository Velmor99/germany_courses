import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AdvantagesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  where: "main" | "speaking_club";
}