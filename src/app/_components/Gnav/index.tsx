"use client";

import Link from "next/link";
import styles from "./index.module.css";
import { useState } from "react";
import clsx from "clsx";

export default function Gnav() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleGnav = () => setOpen((prev) => !prev);
  const closeGnav = () => setOpen(false);

  return (
    <>
      <button
        className={clsx(styles.gnav, isOpen && styles.open)}
        aria-controls="menu"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isOpen}
        onClick={toggleGnav}
      >
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="40" height="30" viewBox="0 0 40 30">
          <rect className={styles.lineTop} x="0" y="5"  width="40" height="4" rx="2"/>
          <rect className={styles.lineMiddle} x="0" y="13" width="40" height="4" rx="2"/>
          <rect className={styles.lineBottom} x="0" y="21" width="40" height="4" rx="2"/>
        </svg>
      </button>

      <nav className={styles.nav} onClick={closeGnav} id="menu" hidden={!isOpen}>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
