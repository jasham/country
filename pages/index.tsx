import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const changeTheme = () => {
    let theme = localStorage.getItem("theme");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className="dark:text-white">This is to test theme toggle</p>
        <button onClick={changeTheme}>Theme Change</button>
      </main>
    </div>
  );
};

export default Home;
