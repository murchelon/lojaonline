import React from 'react'
import { NextPage } from 'next'
import ProductsStyles from './Products.module.css'
import Card from '../../Components/Card/CardController.tsx'

const ProductsView: NextPage = () =>  {
    return (

      <div>
        <main>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </main>
      </div>

    );
} 

export default ProductsView;