import Image from "next/image";
import styles from "./page.module.css";
import Img from "@/../public/bananas.jpg";
import Counter from "@/components/counter";

export default async function Home() {

  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  return (
    <main className={styles.main}>
      {/* <Counter/> */}

      <div className={styles.description}>
        <p>
          {JSON.stringify(users)}
        </p>
        {/* <Image
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
        /> */}
      </div>

      <div className={styles.center}>
        <h1> My First Application. </h1>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  );
}
