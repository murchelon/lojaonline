import React from 'react'
import { NextPage } from 'next'
import HomeStyles from './Home.module.css'
import HeaderController from '../../Components/Header/HeaderController.tsx'
import ProductsController from '../../Screens/Products/ProductsController.tsx'
import LoginController from '../../Screens/Login/LoginController.tsx'


const HomeView: NextPage = () =>  {

    return (

      <div className={HomeStyles.appContainer}>

        <HeaderController />
        {/* <LoginController /> */}
        <ProductsController />

      </div>

    );
} 

export default HomeView;
