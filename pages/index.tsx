import type { NextPage } from "next";
import Head from "next/head";

import ComingSoon from "components/ComingSoon";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dương & Khánh</title>
        <meta
          name="description"
          content="Duong and Khanh wedding information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ComingSoon />
    </div>
  );
};

export default Home;
