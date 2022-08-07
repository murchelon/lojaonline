import React from 'react'
import { NextPage } from 'next'
import LojaOnlineController from '../src/LojaOnlineController' 
import { AuthProvider } from '../src/Contexts/AuthContext'

const RootSite: NextPage = () => {
  return (
    <AuthProvider>
      <LojaOnlineController />  
    </AuthProvider>      
  )
}

export default RootSite;
