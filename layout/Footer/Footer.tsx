import React from "react";
import { FooterProps } from "./Footer.Props";
import styles from "./Header.module.css";

export default function HTMLDivElement({ ...props }: FooterProps) {
  return <div {...props}>Footer</div>;
}
