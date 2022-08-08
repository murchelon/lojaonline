import React from 'react'
import { useEffect, useState } from 'react';
import ProductsStyles from './Products.module.css'
import Card from '../../Components/Card/CardController'
import Grid from "@mui/material/Grid"
import { tpProduct } from '../../Contexts/AuthContextTypes'

const ProductsView = (props: any) =>  {

  const [stPAGE_CONTROLS, set_stPAGE_CONTROLS] = React.useState([]);

  const products: Array<tpProduct> = props.products

  const totProd = props.totalProd;
  const perPage = props.perPage;

  var totPages = Math.floor(totProd / perPage);

  if (totProd % perPage !== 0)
  {
    totPages++;
  }

  var arrPages = [];
  for (var x=1 ; x <= totPages ; x++)
  {
    arrPages.push(x)
  }

  // useEffect(() => {    
    
  // }, [])    

  
  // set_stPAGE_CONTROLS(pageControlsElem)

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

  
  const pageControlsElem = arrPages.map(page => {

    var theStyle = ProductsStyles.pagingPage
    var theStyleSel = ProductsStyles.pagingPageSelected
    var finalStyle;

    if (props.page == page)
    {
      finalStyle = theStyleSel
    }
    else
    {
      finalStyle = theStyle
    }


    return (        
      <div className={finalStyle} onClick={() => {props.handleSetPage(page)}}>{page}</div>
    );
  });


  return (

    <div>
      
      <div className={ProductsStyles.pagingTitle}>Paginas:</div>
      <div className={ProductsStyles.pagingContainer}>
         {pageControlsElem}
      </div>

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