import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
      </div>

      <div className={styles.center}>
        <h1> My First Application. </h1>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  );
}
