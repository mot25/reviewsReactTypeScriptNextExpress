import React from "react";
import { SidebarProps } from "./Sidebar.Props";
import styles from "./Sidebar.module.css";

export default function HTMLDivElement({ ...props }: SidebarProps) {
  return <div {...props}>
    SidebarProps
  </div>;
}
