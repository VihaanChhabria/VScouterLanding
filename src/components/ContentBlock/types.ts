import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
    | {
      title: string;
      color: string;
      link?: string;
      scroll: string;
    }
    | {
      title: string;
      color: string;
      link: string;
      scroll?: string;
    }
    | {
      title: string;
      color?: string;
      link?: string;
      scroll: string;
    }
    | {
      title: string;
      color?: string;
      link: string;
      scroll?: string;
    }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
  largeImage?: boolean;
  socialLinks?: string[];
}
