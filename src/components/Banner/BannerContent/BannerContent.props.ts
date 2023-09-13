import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BannerContentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  classname?: string;
  strong: string;
  text: string;
  greenText?: string;
  buttonText: string;
}