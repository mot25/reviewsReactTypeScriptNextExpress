import {
  DetailedHTMLProps,
  HTMLAttributes,
  ParamHTMLAttributes,
  ReactNode,
} from "react";

export interface ParagrafProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  mode?: "s" | "r" | "b";
}
