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
      </Head>

      <Cover />
      <CreateMessage />
      <Messages />
    </div>
  )
}

export default Home
