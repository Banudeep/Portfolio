import React from "react";
import styles from "./NavbarStyles.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.Home}>
        <a href="#Hero">Banudeep Reddy Gade</a>
      </div>
      <div className={styles.nav_links}>
        <li>
          <a href="#Hero">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
