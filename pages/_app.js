import Head from 'next/head'
import '../styles/reset.css'
import '../styles/globals.css'


function LojaOnline({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Loja Online 1.0</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
  
}

export default LojaOnline
