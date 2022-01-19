import Head from 'next/head'
import Image from 'next/image'
import Page from '../components/Page'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Atom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page />
    </div>
  )
}
