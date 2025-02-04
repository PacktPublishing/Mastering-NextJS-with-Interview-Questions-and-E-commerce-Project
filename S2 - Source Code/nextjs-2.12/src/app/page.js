import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Img from "@/../public/bananas.jpg";
import Counter from "@/components/counter";

export default function Home() {

  return (
    <main className={styles.main}>
      <Counter/>
      <div className={styles.description}>

        <Image
          src="/apples.jpg"
          width={200}
          height={200}
          alt="Apples"
        />

        <Image
          src={Img}
          width={200}
          height={200}
          alt="Bananas"
        />

      </div>

      <div className={styles.center}>
        <h1> My First Application. </h1>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  );
}
