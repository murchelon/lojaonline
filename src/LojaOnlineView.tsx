import React from 'react'
import { NextPage } from 'next'
import LojaOnlineStyles from './LojaOnline.module.css'
import HeaderController from './Components/Header/HeaderController.tsx'
import ProductsController from './Screens/Products/ProductsController.tsx'
import LoginController from './Screens/Login/LoginController.tsx'



const LojaOnlineView: NextPage = (props: any) =>  {

  const isAuth: boolean = props.isAuth
  const user = props.user

  // console.log('LojOnlineView: isAuth: ' + isAuth)


  return (

    <div className={LojaOnlineStyles.appContainer}>

      <HeaderController  />

      {isAuth && (
        <ProductsController  /> 
      )}

      {!isAuth && (
        <LoginController />  
      )}
      
    </div>

  );
} 

export default LojaOnlineView;
