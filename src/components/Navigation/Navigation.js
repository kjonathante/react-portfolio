import React from "react";
import styles from "./Navigation.module.css";

import { Link } from "react-router-dom";

const Navigation = props => {
  const data = [
    { id: "001", to: "/", text: "Home" },
    { id: "002", to: "/portfolio", text: "Portfolio" },
    { id: "003", to: "/contact", text: "Contact" }
  ];
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {data.map(({ id, to, text }) => (
            <li className={styles.li} key={id}>
              <Link className={styles.link} to={to}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
