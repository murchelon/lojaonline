import React from 'react'
import { NextPage } from 'next'
import CadastrarStyles from './Cadastrar.module.css'
import HeaderController from '../../Components/Header/HeaderController'


const CadastrarView: NextPage = () =>  {

    return (

      <div className={CadastrarStyles.CadastrarContainer}>

        <HeaderController  />
        <div>ebbaaaa</div>
      
      </div>

    );
} 

export default CadastrarView;