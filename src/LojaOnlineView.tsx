import React from 'react'
import LojaOnlineStyles from './LojaOnline.module.css'
import HeaderController from './Components/Header/HeaderController'
import ProductsController from './Screens/Products/ProductsController'
import LoginController from './Screens/Login/LoginController'

const LojaOnlineView = (props: any) =>  {

  const isAuth: boolean = props.isAuth
  const user = props.user

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