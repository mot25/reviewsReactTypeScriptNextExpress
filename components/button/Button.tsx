import React from "react";
import ButtonProps from "./Button.props";
import styles from "./Button.module.css";
import cn from "classNames";

export default function Button({
  children,
  mode,
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: mode == "primary",
        [styles.ghost]: mode == "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
}
