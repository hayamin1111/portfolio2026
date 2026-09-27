import Link from "next/link";
import ExternalIcon from "@/app/_components/icons/ExternalIcon";
import styles from "./index.module.css";

interface Props {
  href: string;
  className?: string;
  external?: boolean;
  children: React.ReactNode;
}

export default function TextLink({ href, className, external = false, children }: Props) {
  return (
    <>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={[styles.textLink, className].filter(Boolean).join(" ")}
        >
          {children}
          <ExternalIcon />
        </a>
      ) : (
        <Link href={href} className={`${styles.textLink}`}>
          {children}
        </Link>
      )}
    </>
  );
}
