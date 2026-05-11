"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./index.module.css";

type Chars = [binary: string, hex: string, text: string];

const title = "hayakawa";

const chars: Chars[] = title.split("").map((char) => {
  const code = char.charCodeAt(0);

  return [
    // 2進数に変換
    code.toString(2).padStart(8, "0"),
    // 16進数に変換
    code.toString(16),
    char,
  ];
});

export default function HeroTop() {
  const [charPhases, setCharPhases] = useState(
    // charsの配列の数だけ0のある配列が返される[0, 0, 0, 0...]
    chars.map(() => 0)
  );

  // 時間差でアニメーション実行のため副作用（setTimeout）を扱うのでuseEffect使用
  useEffect(() => {
    const timerIds: number[] = []; //後でキャンセルできるように、作ったタイマーIDを全部入れておく配列

    // 全文字を回す（何文字目かのみ使う）
    chars.forEach((_, charIndex) => {
      // [0]は初期値（binary）なので使わない。
      [1, 2].forEach((nextPhase) => {
        const timerId = window.setTimeout(() => {
          // state更新
          setCharPhases((prev) => {
            // prev をコピーして新しい配列 next を作る
            const next = [...prev];
            next[charIndex] = nextPhase;
            return next;
          });
        // 文字ごとに 120ms ずらし、フェーズ1は +900ms、フェーズ2は +1800ms ずらす
        }, charIndex * 140 + nextPhase * 800);
        timerIds.push(timerId);
      });
    });
  
    return () => {
      // クリーンアップ関数
      timerIds.forEach((timerId) => {
        window.clearTimeout(timerId);
      });
    };
  }, []);

  // HTMLレンダリング
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        {chars.map((char, index) => {
          // どのphase（文字）を表示するかを取得
          const currentPhase = charPhases[index];
          return (
            <span className={styles.char} key={index}>
              {/* wait: 古い要素のexitが終わってから新しい要素をenterさせる */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentPhase}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.35, ease: [0.87, 0.05, 0.02, 0.97] }}
                >
                  {char[currentPhase]}
                </motion.span>
              </AnimatePresence>
            </span>
          );
        })}
      </h1>

       {/* <motion.p className={styles.text}>
        <em className={styles.emphasisText}>マークアップエンジニア（フロントエンド領域対応）</em><br/>
         マークアップを軸に、更新性・拡張性を意識したWebサイト構築・フロントエンド実装を行っています。
       </motion.p> */}
    </section>
  );
}
