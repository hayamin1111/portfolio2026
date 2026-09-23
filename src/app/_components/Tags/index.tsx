import styles from "./index.module.css";
import type { Work } from "@/app/_types/works";

interface Props {
  items: Work["techs"];
}

export default function Tags({ items }: Props) {
  return (
    <ul className={styles.tags}>
      {items.map((item) => (
        <li key={item.id} className={styles.tag}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
