import React from 'react'
import { NextPage } from 'next'
import LojaOnlineStyles from './LojaOnline.module.css'
import HeaderController from './Components/Header/HeaderController.tsx'
import ProductsController from './Screens/Products/ProductsController.tsx'
import LoginController from './Screens/Login/LoginController.tsx'


const LojaOnlineView: NextPage = () =>  {

    return (

      <div className={LojaOnlineStyles.appContainer}>

        <HeaderController />
        <LoginController />
        {/* <ProductsController /> */}

      </div>

    );
} 

export default LojaOnlineView;
