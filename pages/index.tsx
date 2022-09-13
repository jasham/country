import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Main from "../src/modules/main";

const Home: NextPage = () => {
  return <Main />;
};

export default Home;

{
  /* <main className={styles.main}>
        <p className="dark:text-lg">This is to test theme toggle</p>
        <button onClick={changeTheme}>Theme Change</button>
      </main> */
}
