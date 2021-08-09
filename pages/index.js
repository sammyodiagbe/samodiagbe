import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sammy Odiagbe</title>
        <meta name="description" content="Sam Odiagbe blog" />
        <meta name="author" content="Sam Odiagbe" />
      </Head>

      <h1>Hello next.js</h1>
    </div>
  );
}
