import React from "react";
import ButtonProps from "./Button.props";
import styles from "./Button.module.css";
import cn from "classNames";

export default function Button({
  mode,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
    // {...props.className}
      className={cn(styles.button, className, {
        [styles.primary]: mode == "primary",
        [styles.ghost]: mode == "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
}
