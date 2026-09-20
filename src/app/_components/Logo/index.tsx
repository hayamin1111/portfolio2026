"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

export default function Logo() {
  const isTop: boolean = usePathname() === "/";
  const content = "< Hayakawa / >";
  return (
    <>
      {isTop ? (
        <strong className={styles.logo}>{content}</strong>
      ) : (
        <Link href="/" className={styles.logo}>
          {content}
        </Link>
      )}
    </>
  );
}
