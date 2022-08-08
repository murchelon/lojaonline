
import Head from 'next/head'
import React from 'react'
import '../styles/reset.css'
import '../styles/globals.css'
import { SessaoProvider } from '../src/Contexts/SessaoContext';

function LojaOnline({ Component, pageProps }) {


  return (
    <>
      <Head>
        <title>Loja Online 1.0</title>
      </Head>
      <SessaoProvider>
        <Component {...pageProps} />
      </SessaoProvider>
    </>
  )
  
}

export default LojaOnline
