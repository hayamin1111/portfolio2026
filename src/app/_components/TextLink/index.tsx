import Link from "next/link";
import ExternalIcon from "@/app/_components/icons/ExternalIcon";
import styles from "./index.module.css";

interface Props {
  href: string;
  external?: boolean;
  cta?: boolean;
  children: React.ReactNode;
}

export default function TextLink({ href, external = false, cta = false, children }: Props) {
  return (
    <>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.textLink} ${cta && styles.cta}`}
        >
          {children}
          <ExternalIcon />
        </a>
      ) : (
        <Link href={href} className={`${styles.textLink} ${cta && styles.cta}`}>
          {children}
        </Link>
      )}
    </>
  );
}
