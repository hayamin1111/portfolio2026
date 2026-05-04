import Link from "next/link";
import styles from "./index.module.css";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function Button({ href, children} : Props) {
  return (
    <Link  href={href} className={styles.button}>
      {children}
    </Link>
  )
}
