export interface IFormatedData {
  title: string;
  content: string;
}

export interface IAdvancedHowItWorks {
  strong: string;
  text: string;
}

export type IHowItWorks = IAdvancedHowItWorks | string;