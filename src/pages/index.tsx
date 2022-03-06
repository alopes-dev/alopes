import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { theme } from "~/app/theme/index";
import { BaseLayout, HomeTemplate } from "~/app/presentation/template";
import { Row, Col } from "~/app/presentation/components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alopes.dev </title>
        <meta name="description" content="Alopes.dev - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BaseLayout pageTitle="Portfolio alopes.dev">
          <HomeTemplate />
        </BaseLayout>
      </main>
    </div>
  );
};

export default Home;
