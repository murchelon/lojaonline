import React from 'react'
import LojaOnlineController from '../src/LojaOnlineController.tsx' 
import { AuthProvider } from '../src/Contexts/AuthContext.tsx'

const RootSite = () => {
  return (
    <AuthProvider>
      <LojaOnlineController />  
    </AuthProvider>      
  )
}

export default RootSite;
