import Head from 'next/head'
import React, { useState} from 'react'
import Image from 'next/image'
import Page from '../components/Page'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  const [selectedLink, setSelectedLink] = useState();
  return (
    <div>
      <Head>
        <title>Atom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setSelectedLink={setSelectedLink}/>
      <Page selectedLink={selectedLink}/>
    </div>
  )
}
