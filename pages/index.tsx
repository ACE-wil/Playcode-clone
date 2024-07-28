import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ConsoleTester from "./console/ConsoleTester";
import TheEditor from "./console/TheEditor";
const Home: NextPage = () => {
  return (
    <div style={{marginTop:'200px'}}>
      <TheEditor value={undefined} onChange={undefined}/>
    </div>
  );
};

export default Home;
