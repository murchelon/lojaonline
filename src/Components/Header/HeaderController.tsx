import React from 'react'
import { useContext } from 'react'
import HeaderView from './HeaderView'
import { AuthContext } from '../../Contexts/AuthContext'
import Router from 'next/router'

const HeaderController = () =>  {

  const { isAuth, user } = useContext(AuthContext)

  const { logoff } = useContext(AuthContext)

  function handleLogoff()
  {
    logoff()
    Router.push('/'); 
  }

  // console.log('isAuth = ' + isAuth)

  return (
    <HeaderView 
      isAuth={isAuth}  
      name={user.name}
      handleLogoff={handleLogoff}
    />
  );
} 

export default HeaderController;