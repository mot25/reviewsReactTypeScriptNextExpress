import React from "react";
import { FooterProps } from "./Footer.Props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export default function HTMLDivElement({ className, ...props }: FooterProps) {
  return (
    <footer className={cn(styles.footer, className)}>
      <span className={styles.security}>
        OwlTop © {format(new Date(), "yyyy")} Все права защищены
      </span>
      <a href="#" className={styles.link}>
        Пользовательское соглашение
      </a>
      <a href="#" className={styles.link}>
        Политика конфиденциальности
      </a>
    </footer>
  );
}
