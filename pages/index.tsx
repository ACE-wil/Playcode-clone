import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ConsoleTester from "./console/ConsoleTester";
const Home: NextPage = () => {
  return (
    <div>
      <ConsoleTester/>
    </div>
  );
};

export default Home;
