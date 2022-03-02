import React from "react";
import { ParagrafProps } from "./Paragraf.props";
import cn from "classnames";
import styles from "./Paragraf.module.css";

export default function Paragraf({
  mode = "r",
  children,
  className,
  ...props
}: ParagrafProps) {
  return (
    <p
      className={cn(styles.paragraf, className, {
        [styles.small]: mode == "s",
        [styles.regular]: mode == "r",
        [styles.big]: mode == "b",
      })}
      {...props}
    >
      {children}
    </p>
  );
}
