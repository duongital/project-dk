/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Head from 'next/head'

import Messages from 'components/Messages'
import CreateMessage from 'components/CreateMessage'
import Cover from 'components/Cover'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dương & Khánh</title>
        <meta name="description" content="Duong and Khanh wedding information" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Cover />
      <CreateMessage />
      <Messages />
    </div>
  )
}

export default Home
