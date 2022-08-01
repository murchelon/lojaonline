import React from 'react'
import { useContext } from 'react'
import HeaderView from './HeaderView.tsx'
import { AuthContext, Logoff } from '../../Contexts/AuthContext.tsx'
import Router from 'next/router'

const HeaderController = () =>  {

  const { isAuth, user } = useContext(AuthContext)

  const { logoff } = useContext(AuthContext)

  function handleLogoff()
  {
    logoff()
  }


  console.log('isAuth = ' + isAuth)

  return (
    <HeaderView 
      isAuth={isAuth}  
      name={user.name}
      handleLogoff={handleLogoff}
    />
  );
} 

export default HeaderController;