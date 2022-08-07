import React from 'react'
import ProductsStyles from './Products.module.css'
import Card from '../../Components/Card/CardController'
import Grid from "@mui/material/Grid"
import { tpProduct } from '../../Contexts/AuthContextTypes'

const ProductsView = (props: any) =>  {

  const products: Array<tpProduct> = props.products

  const producsElements = products.map(product => {
    return (        
      <Grid item xs={2} sm={4} md={4} key={product._id}>
        <Card 
          key={product._id}
          product={product} 
          handleClickComprar={props.handleClickComprar}
          handleClickFav={props.handleClickFav}  
        />
      </Grid>        
    );
  });

  return (

    <div>
      <main>

      <Grid 
        container 
        spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
        direction="row"          
        >

        {producsElements}        

      </Grid>



      </main>
    </div>

  );
} 

export default ProductsView;