"use client";

import Link from "next/link";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Gnav() {
  // リンク先
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/works", label: "Works" },
  ];

  // menu開閉
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleGnav = () => setOpen((prev) => !prev);
  const closeGnav = () => setOpen(false);

  // bodyタグ連動
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("is-fixed");
    } else {
      document.body.classList.remove("is-fixed");
    }

    return () => {
      document.body.classList.remove("is-fixed");
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={clsx(styles.button, isOpen && styles.open)}
        aria-controls="menu"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isOpen}
        onClick={toggleGnav}
      >
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="30" height="30" viewBox="0 0 30 30" className={styles.lines}>
          <rect x="0" y="0"  width="30" height="3" rx="2"/>
          <rect x="0" y="9" width="30" height="3" rx="2"/>
          <rect x="0" y="18" width="30" height="3" rx="2"/>
        </svg>
      </button>

      <nav className={styles.nav} id="menu" aria-hidden={!isOpen}>
        <ul className={styles.list}>
          {navItems.map((item) => (
            <li key={item.href} className={styles.listItem}>
              <Link href={item.href} onClick={closeGnav}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
