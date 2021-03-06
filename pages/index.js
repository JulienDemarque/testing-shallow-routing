import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { query } = router;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Testing shallow routing</div>
      {query ? (
        <input
          onChange={(e) => {
            router.push(`/?input=${e.target.value}`, undefined, {
              shallow: true,
            });
          }}
        />
      ) : null}
    </div>
  );
}
