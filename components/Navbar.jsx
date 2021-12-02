import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href="/">ARS DEVELOPMENT</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">DISEÑO</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">DESARROLLO</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/consulting">CONSULTORIA</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/about">¿QUIÉNES SOMOS?</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">CONTACTO</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul
        className={styles.menu}
        style={{ right: open ? "0px" : "-50vw" }}
        onClick={() => setOpen(false)}
      >
        <li className={styles.menuItem}>
          <Link href="/products/design">DISEÑO</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/development">DESARROLLO</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/consulting">CONSULTORIA</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about">¿QUIÉNES SOMOS?</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">CONTACTO</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
