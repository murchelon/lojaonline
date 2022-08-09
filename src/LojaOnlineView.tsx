import React from 'react'
import LojaOnlineStyles from './LojaOnline.module.css'
import HeaderController from './Components/Header/HeaderController'
import ProductsController from './Screens/Products/ProductsController'
import LoginController from './Screens/Login/LoginController'

const LojaOnlineView = (props: any) =>  {

  const isAuth: boolean = props.isAuth
  const user = props.user
  const sessao = props.sessao

  let renderComponent;

  if (isAuth)
  {
    renderComponent = <ProductsController sessao={sessao}/>     
  }
  else
  {
    renderComponent = <LoginController />     
  }

  return (

    <div className={LojaOnlineStyles.appContainer}>

      <HeaderController  />
      {renderComponent}
      
    </div>

  );
} 

export default LojaOnlineView;