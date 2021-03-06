import React from "react";
import { SidebarProps } from "./Sidebar.Props";
import styles from "./Sidebar.module.css";
import Menu from "../Menu/Menu";

export default function HTMLDivElement({ ...props }: SidebarProps) {
  return <div {...props}>
    <Menu/>
  </div>;
}
