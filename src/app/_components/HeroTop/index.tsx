"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./index.module.css";

// const phases = [
//   {
//     label: "UTF-8 / BINARY",
//     value: "01001000 01100001 01111001 01100001 01101011 01100001 01110111 01100001",
//     // value: "01001000 01100001 01111001 01100001 01101011 01100001 01110111 01100001 00100000 01010000 01101111 01110010 01110100 01100110 01101111 01101100 01101001 01101111",
//   },
//   {
//     label: "UTF-8 / HEX",
//     value: "48 61 79 61 6b 61 77 61",
//     // value: "48 61 79 61 6b 61 77 61 20 50 6f 72 74 66 6f 6c 69 6f",
//   },
//   {
//     label: "HUMAN READABLE",
//     value: "hayakawa",
//   },
// ];

// const phases = [
//   {
//     binary: "01001000",
//     hex: "48",
//     readable: "H",
//   },
//   {
//     binary: "01100001",
//     hex: "61",
//     readable: "a",
//   },
//   {
//     binary: "01111001",
//     hex: "79",
//     readable: "y",
//   },
//   {
//     binary: "01100001",
//     hex: "61",
//     readable: "a",
//   },
//   {
//     binary: "01101011",
//     hex: "6b",
//     readable: "k",
//   },
//   {
//     binary: "01100001",
//     hex: "61",
//     readable: "a",
//   },
//   {
//     binary: "01110111",
//     hex: "77",
//     readable: "w",
//   },
//   {
//     binary: "01100001",
//     hex: "61",
//     readable: "a",
//   },
// ];

const STEP_DELAY = 180;

const phases = [
  ["01001000", "01100001", "01111001"],
  ["48", "61","79"],
  ["h", "a", "y"]
]

export default function HeroTop() {
  // const [phase, setPhase] = useState(0);
  // const current = phases[phase];

  // useEffect(() => {
  //   if (phase >= phases.length - 1) return;

  //   const timerId = window.setTimeout(() => {
  //     setPhase((prev) => prev + 1);
  //   }, 1200);

  //   return () => {
  //     window.clearTimeout(timerId);
  //   };
  // }, [phase]);

  const [phase, setPhase] = useState(0);
  const current = phases[phase];
  console.log("current"+current[0])

  // phaseが変更したら次のphaseが開始する
  useEffect(() => {
    // phaseが最後まで回ったら終了
    if (phase >= phases.length - 1) return;

    const timerId = window.setTimeout(() => {
      setPhase((prev) => prev + 1);
    }, 1000);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [phase]);

  return (
    <section className={styles.hero}>
      {/* <p className={styles.label}>{current.label}</p>
      <h1 className={styles.title}>{current.value}</h1>
      <AnimatePresence mode="wait">
        <motion.h1
          key={phase}
          className={styles.title}
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.87, 0.05, 0.02, 0.97] }}
        >
          {current.value}
        </motion.h1>
      </AnimatePresence>
      <p className={styles.title}>PORTFOLIO</p> */}

      {/* <AnimatePresence mode="wait">
        <motion.span
        >
          {current.value}
        </motion.span>
      </AnimatePresence> */}
      <h1>
      {
        current.map((el, index) => (
          <span className={styles.char} key={`${el}-${index}`}>{el}</span>
        ))
      }
      </h1>

      <span>
        {current}
      </span>

      <p className={styles.text}>
        マークアップを軸に、更新性・拡張性を意識したサイト構築を行っています。
      </p>
    </section>
  );
}
