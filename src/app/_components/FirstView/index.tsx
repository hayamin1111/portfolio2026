"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import DecoHeaeder from "@/app/_components/Deco";
import styles from "./index.module.css";

type AnimationMode = "checking" | "play" | "skip";
type Chars = [binary: string, hex: string, text: string];

const title: string = "Hayakawa";
const LAST_ANIMATION_PLAYED_AT: string = "last_animation_played_at";
const FIRST_VISITED_TTL_MS: number = 3 * 60 * 60 * 1000;

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

export default function FirstView() {
  const [charPhases, setCharPhases] = useState(
    chars.map(() => 0), // charsの配列の数だけ0のある配列が返される[0, 0, 0, 0...]
  );
  const [isPortfolioReady, setIsPortfolioReady] = useState(false);
  const [isLeadReady, setIsLeadReady] = useState(false);

  const [animationMode, setAnimationMode] = useState<AnimationMode>("checking");
  //補助変数
  const isPlaying = animationMode === "play";
  const isSkipping = animationMode === "skip";
  const isChecked = animationMode !== "checking";
  //DOMにレンダーするか
  const shouldRenderTitle = isChecked;
  const shouldRenderPortfolio = isSkipping || isPortfolioReady;
  const shouldRenderLead = isSkipping || isLeadReady;

  // localStorage、Dateを扱う
  useEffect(() => {
    const rawValue = localStorage.getItem(LAST_ANIMATION_PLAYED_AT);
    const savedTime = rawValue !== null ? Number(rawValue) : 0;
    const now = Date.now();

    const nextMode: AnimationMode = now - savedTime > FIRST_VISITED_TTL_MS ? "play" : "skip";

    // localStorageはブラウザでしか確認できないため、マウント後に状態を確定するためにuseEffectに記述
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAnimationMode(nextMode);
  }, []);

  // 時間差でアニメーション実行のため副作用（setTimeout）を扱う
  useEffect(() => {
    if (!isPlaying) return;

    localStorage.setItem(LAST_ANIMATION_PLAYED_AT, Date.now().toString());

    const timerIds: number[] = []; //後でキャンセルできるように、作ったタイマーIDを全部入れておく配列

    // 全文字を回す（何文字目かのみ使う）
    chars.forEach((_, charIndex) => {
      // [0]は初期値（binary）なので使わない。
      [1, 2].forEach((nextPhase) => {
        const timerId = window.setTimeout(
          () => {
            // state更新
            setCharPhases((prev) => {
              // prev をコピーして新しい配列 next を作る
              const next = [...prev];
              next[charIndex] = nextPhase;
              return next;
            });
            // 文字ごとに 120ms ずらし、フェーズ1は +900ms、フェーズ2は +1800ms ずらす
          },
          charIndex * 140 + nextPhase * 600,
        );
        timerIds.push(timerId);
      });
    });

    return () => {
      // クリーンアップ関数
      timerIds.forEach((timerId) => {
        window.clearTimeout(timerId);
      });
    };
  }, [isPlaying]);

  // HTMLレンダリング
  return (
    <section className={styles.fv}>
      <DecoHeaeder>Introduction</DecoHeaeder>
      {shouldRenderTitle && (
        <h1 className={styles.title}>
          {chars.map((char, index) => {
            // どのphase（文字）を表示するかを取得
            const currentPhase = isSkipping ? 2 : charPhases[index];

            //リードの表示用
            const isLastChar = index === chars.length - 1; //全文字が最終phaseになったか
            const isFinalPhase = currentPhase === 2; //最後の文字か

            return (
              <span className={styles.char} key={index}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentPhase}
                    /* 初回訪問のみアニメーション */
                    initial={isPlaying ? { opacity: 0, y: 10, filter: "blur(4px)" } : false}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: 0.09, ease: [0.87, 0.05, 0.02, 0.97] }}
                    onAnimationComplete={() => {
                      if (isLastChar && isFinalPhase) {
                        setIsPortfolioReady(true);
                      }
                    }}
                  >
                    {char[currentPhase]}
                  </motion.span>
                </AnimatePresence>
              </span>
            );
          })}
          {/* wait: 古い要素のexitが終わってから新しい要素をenterさせる */}
          <AnimatePresence mode="wait">
            {shouldRenderPortfolio && (
              <motion.span
                className={styles.subTitle}
                initial={isPlaying ? { opacity: 0, y: 4, filter: "blur(2px)" } : false}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: [0.87, 0.05, 0.02, 0.97] }}
                onAnimationComplete={() => setIsLeadReady(true)}
              >
                Markup & <em className={styles.textEmphasis}>Frontend</em>
              </motion.span>
            )}
          </AnimatePresence>
        </h1>
      )}
      {shouldRenderLead && (
        <motion.p
          className={styles.lead}
          initial={isPlaying ? { opacity: 0, y: 8, filter: "blur(4px)" } : false}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.87, 0.05, 0.02, 0.97] }}
        >
          拡張性・更新性・デザイン再現性を重視したマークアップ・スタイリングを主軸に、TypeScriptを用いたAPI連携などのフロントエンド実装も経験してきました。
          <br />
          これまでの制作経験を活かして安定した実装に貢献しながら、JavaScriptフレームワークを用いたフロントエンド領域へも対応範囲を広げています。
        </motion.p>
      )}
    </section>
  );
}
