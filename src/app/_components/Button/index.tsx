import Link from "next/link";
import styles from "./index.module.css";

interface Props {
  href: string;
  external?: boolean;
  cta?: boolean;
  children: React.ReactNode;
}

export default function Button({ href, external = false, cta = false, children }: Props) {
  return (
    <>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.button} ${cta && styles.cta}`}
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={`${styles.button} ${cta && styles.cta}`}>
          {children}
        </Link>
      )}
    </>
  );
}
