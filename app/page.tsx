import styles from "./page.module.css"

export default function Page() {
  return (
    <main className={styles.main}>
      <img src="/logo/logotype_web_long.svg" className={styles.logo}/>
      <text className="W1">
        Hello, <br /> Next.js!
      </text>
    </main>
  );
}
