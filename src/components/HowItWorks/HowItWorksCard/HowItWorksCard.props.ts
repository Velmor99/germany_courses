import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HowItWorksCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  strong: string;
  className?: string;
  text: string;
  order: number;
}