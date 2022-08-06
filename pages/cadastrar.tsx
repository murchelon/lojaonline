import React from 'react'
import CadastrarController from '../src/Screens/Cadastrar/CadastrarController' 
import { AuthProvider } from '../src/Contexts/AuthContext'

const Cadastrar = () =>  {

  return (
    <AuthProvider>
      <CadastrarController />
    </AuthProvider>  
  );
} 

export default Cadastrar;
