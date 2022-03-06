import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./Menu.module.css";
export default function Menu(): JSX.Element {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  useEffect(() => {
    setMenu && setMenu([]);
  });
  return (
    <ul>
      {menu.map((item, i) => {
        return <li key={i}>{item._id.secondCategory}</li>;
      })}
    </ul>
  );
}
