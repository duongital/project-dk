/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Head from 'next/head'

import Messages from 'components/Messages'
import CreateMessage from 'components/CreateMessage'
import Cover from 'components/Cover'
import Introduction from 'components/Introduction'
import Footer from 'components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Đại Dương & Hoàng Khánh</title>
        <meta name="description" content="Cùng gửi lời chúc mừng đến chú rể & cô dâu ngay nhé!" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;600&family=Cedarville+Cursive&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Cover />
      <Introduction />
      <CreateMessage />
      <Messages />
      <Footer />
    </>
  )
}

export default Home
