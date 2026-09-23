import type { ReactNode } from "react";
import styles from "./index.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ButtonArea({ className, children }: Props) {
  return <div className={[styles.buttonArea, className].filter(Boolean).join(" ")}>{children}</div>;
}
