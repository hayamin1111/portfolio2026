"use client";

import styles from "./index.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import FingerIcon from "@/app/_components/icons/FingerIcon";
import clsx from "clsx";

const NAV_CLOSE_DURATION = 800;

export default function Gnav() {
  // リンク先
  const navItems = [
    { href: "/", label: "トップページへ" },
    { href: "/about", label: "Hayakawaを知る" },
    { href: "/skills", label: "Skills" },
    { href: "/works", label: "個人制作を見る" },
  ];

  //ナビが開いている状態
  const [isOpen, setOpen] = useState<boolean>(false);
  //閉じるアニメーション中
  const [isClosing, setClosing] = useState<boolean>(false);
  //navを画面上に存在させる状態
  const showNav = isOpen || isClosing;

  //開く処理
  const openNav = () => {
    setClosing(false);
    setOpen(true);
  };

  //閉じる処理（アニメーションがすぐ消えないようにisOpenをfalseにはしない）
  const closeNav = () => {
    if (!isOpen) return;
    setClosing(true);
  };

  // トグル処理
  const toggleNav = () => {
    if (isOpen) {
      closeNav();
      return;
    }

    openNav();
  };

  // 完全に閉じる処理
  useEffect(() => {
    if (!isClosing) return;

    // isClosingがtrueになったら実行
    const timerId = window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, NAV_CLOSE_DURATION);

    // クリーンアップ
    return () => {
      window.clearTimeout(timerId);
    };
  }, [isClosing]);

  // body固定の処理
  useEffect(() => {
    // showNavがtrueになったら実行
    if (showNav) {
      document.body.classList.add("is-fixed");
    } else {
      document.body.classList.remove("is-fixed");
    }

    // クリーンアップ
    return () => {
      document.body.classList.remove("is-fixed");
    };
  }, [showNav]);

  return (
    <>
      <button
        className={clsx(styles.button, isOpen && !isClosing && styles.open)}
        aria-controls="menu"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isOpen}
        onClick={toggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="40"
          height="36"
          viewBox="0 0 40 36"
          className={styles.lines}
        >
          <rect x="0" y="0" width="40" height="4" rx="1" />
          <rect x="0" y="9" width="40" height="4" rx="1" />
          <rect x="0" y="18" width="40" height="4" rx="1" />
        </svg>
      </button>

      <nav
        className={clsx(
          styles.nav,
          isOpen && !isClosing && styles.open,
          isClosing && styles.closing,
        )}
        id="menu"
        aria-hidden={!showNav}
      >
        <ul className={styles.list}>
          {navItems.map((item) => (
            <li key={item.href} className={styles.listItem}>
              <Link href={item.href} onClick={closeNav} className={styles.link}>
                <span className={styles.linkIcon}>
                  <FingerIcon />
                </span>
                <span className={styles.linkText}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.animation}></div>
      </nav>
    </>
  );
}
