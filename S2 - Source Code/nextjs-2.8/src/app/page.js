import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <h1> My First Application. </h1>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  );
}
