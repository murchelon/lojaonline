import React from 'react'
import { NextPage } from 'next'
import CadastrarController from '../src/Screens/Cadastrar/CadastrarController' 
import { AuthProvider } from '../src/Contexts/AuthContext'

const Cadastrar: NextPage = () =>  {

  return (
    <AuthProvider>
      <CadastrarController />
    </AuthProvider>  
  );
} 

export default Cadastrar;
