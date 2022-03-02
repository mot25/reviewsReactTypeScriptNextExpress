import React from "react";
import { TagProps } from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

export default function Tag({
  size = "r",
  children,
  className,
  color,
  href,
  ...props
}: TagProps) {
  return (
    <p
      className={cn(styles.tag, className, {
        [styles.small]: size == "s",
        [styles.regular]: size == "r",
        [styles.small]: size == "s",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.grey]: color == "grey",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </p>
  );
}
