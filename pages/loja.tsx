import React from 'react'
import { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import LojaOnlineController from '../src/LojaOnlineController' 
import { AuthProvider } from '../src/Contexts/AuthContext'



export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { ['lojaonline.token']: token } = parseCookies(ctx)  

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
      
    return {
        props: {}
    }
}

const Loja: NextPage = () => {
  return (
    <AuthProvider>
      <LojaOnlineController />  
    </AuthProvider>      
  )
}

export default Loja;