import React from "react";
import { HeaderProps } from "./Header.Props";
import styles from "./Header.module.css";

export default function HTMLDivElement({ ...props }: HeaderProps) {
  return <div {...props}>Header</div>;
}
