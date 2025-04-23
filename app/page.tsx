import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="main-layout">
      <div className="cover-img full"></div>
      <main className={styles.main}>
        <h1>Vered Ben David</h1>

      </main>
    </div>
  )
}
