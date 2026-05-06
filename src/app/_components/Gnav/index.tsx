"use client";

import Link from "next/link";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
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
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="40" height="36" viewBox="0 0 40 36" className={styles.lines}>
          <rect x="0" y="0"  width="40" height="4" rx="1"/>
          <rect x="0" y="9" width="40" height="4" rx="1"/>
          <rect x="0" y="18" width="40" height="4" rx="1"/>
        </svg>
      </button>

      <nav
        className={clsx(
          styles.nav,
          isOpen && !isClosing && styles.open,
          isClosing && styles.closing
        )}
        id="menu"
        aria-hidden={!showNav}
      >
        <ul className={styles.list}>
          {navItems.map((item) => (
            <li key={item.href} className={styles.listItem}>
              <Link href={item.href} onClick={closeNav} className={styles.link}>
                <svg className={styles.icon} width="50" height="37" viewBox="0 0 50 37" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.444 15.4333H34.946C34.72 15.4333 34.073 15.4333 33.84 15.4333C32.804 15.4333 30.25 15.6533 29.282 14.5633C27.753 12.8433 30.317 10.3613 30.793 8.98926C31.269 7.62026 32.34 5.00226 31.358 2.06526C30.326 -1.01974 27.186 -0.496742 26.692 2.62526C26.42 4.35526 24.449 9.20026 21.48 11.9543C18.84 14.4033 16.553 16.1273 15.471 17.3913C14.711 18.2763 12.57 18.9123 12.57 18.9123V33.4813C12.57 33.4813 12.846 33.4813 14.918 33.4813C19.822 33.4813 21.342 35.1643 26.243 35.1643C29.974 35.1643 33.703 34.9463 35.154 34.9463C36.564 34.9463 37.708 33.7453 37.708 32.2653C37.708 31.4643 37.369 30.7543 36.838 30.2633H37.982C39.395 30.2633 40.539 29.0623 40.539 27.5823C40.539 26.7503 40.171 26.0163 39.605 25.5243C40.768 25.2743 41.644 24.1933 41.644 22.8993C41.644 22.0433 41.253 21.2883 40.658 20.7963H47.444C48.855 20.7963 50 19.5973 50 18.1153C50 16.6353 48.856 15.4333 47.444 15.4333Z"/>
                  <path d="M9.392 17.4843H0V36.2693H9.392V17.4843Z"/>
                </svg>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.animation}></div>
      </nav>
    </>
  );
}
