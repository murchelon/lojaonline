import React from 'react'
import { useContext } from 'react'
import Router from 'next/router'
import HeaderView from './HeaderView'
import { AuthContext } from '../../Contexts/AuthContext'
import { SessaoContext } from '../../Contexts/SessaoContext'


const HeaderController = () =>  {

  const { isAuth, user } = useContext(AuthContext)
  const { defineSessao } = useContext(SessaoContext)

  const { logoff } = useContext(AuthContext)

  function handleLogoff()
  {
    logoff()
    Router.push('/'); 
  }


  function handleMenuClick(menu: string)
  {
    
    defineSessao(menu)

    switch(menu)
    {
      case 'LOJA':
        Router.push('/loja')
        break;
      case 'FAV':
        Router.push('/favoritos')
        break;
      case 'NEWUSER':
        Router.push('/cadastrar')
        break;
    }
  }


  // console.log('isAuth = ' + isAuth)

  return (
    <HeaderView 
      isAuth={isAuth}  
      name={user.name}
      handleLogoff={handleLogoff}
      handleMenuClick={handleMenuClick}
    />
  );
} 

export default HeaderController;