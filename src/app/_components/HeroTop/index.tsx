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

// const phases = [
//   ["01001000", "01100001", "01111001"],
//   ["48", "61","79"],
//   ["h", "a", "y"]
// ]

type Chars = [binary: string, hex: string, text: string];

const chars: Chars[] = [
  ["01001000", "48", "h"],
  ["01100001", "61", "a"],
  ["01111001", "79", "y"],
  ["01100001", "61", "a"],
  ["01101011", "6b", "k"],
  ["01100001", "61", "a"],
  ["01110111", "77", "w"],
  ["01100001", "61", "a"],
];

export default function HeroTop() {
  const [charPhases, setCharPhases] = useState(
    // [0, 0, 0, 0...]になる
    // chars.map(() => 0)
    // charsの配列の数だけ0のある配列が返される[0, 0, 0, 0...]
    chars.map(() => 0)
  );

  // 時間差でアニメーション実行のため副作用（setTimeout）を扱うのでuseEffect使用
  useEffect(() => {
    // 全文字を回す
    chars.forEach((char, charsIndex) => {
      // 各文字を回す
      char.forEach((c, charIndex) => {
        console.log(c[0]);

      })
    })



    // const timerId = () => {
    //   window.setTimeout(() => {

    //   }, 1000);

    // }

    return () => {
      // window.clearTimeout(timerId)
    }


  }, [])

  return (
    <section className={styles.hero}>
      <h1>
        {/* 0 なら binary、1 なら hex、2 なら text */}
        {chars.map((char, index) => (
          <span className={styles.char} key={index}>
            {char[charPhases[index]]}
          </span>
        ))}
      </h1>


      <p className={styles.text}>
        マークアップを軸に、更新性・拡張性を意識したサイト構築を行っています。
      </p>
    </section>
  );
}
