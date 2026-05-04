import styles from "./not-found.module.css"

export default function NotFound() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>ページが見つかりませんでした</h1>
        <p className={styles.text}>
          あなたがアクセスしようとしたページは存在しません。
          <br />
          URLを再度ご確認ください。
        </p>
      </div>
    </>
  )
}
