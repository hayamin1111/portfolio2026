import styles from "./index.module.css";
import Heading from "@/app/_components/heading";

interface Skills {
  name: string;
  detail: string;
}

const data: Skills[] = [
  {
    name: "実務での主な技術",
    detail: "HTML / CSS / ",
  },
  {
    name: "個人開発で使用",
    detail: "10",
  },
  {
    name: "個人開発で使用",
    detail: "10",
  },
];

export default function Skills() {
  return (
    <section className={styles.skills}>
      <Heading>skills</Heading>
      <ul className={styles.list}>
        {data.map((skill, index) => (
          <li className={styles.listItem} key={index}>
            <strong className={styles.name}>{skill.name}</strong>
            <p className={styles.detail}>{skill.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
