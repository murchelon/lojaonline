import React from 'react'
import { NextPage } from 'next'
import ProductsStyles from './Products.module.css'
import Card from '../../Components/Card/CardController.tsx'
import Grid from "@mui/material/Grid"

const ProductsView: NextPage = () =>  {
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

          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card />
          </Grid>
          
          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card />
          </Grid>

          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card />
          </Grid>

          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card />
          </Grid>

          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card />
          </Grid>

          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card />
          </Grid>

          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card />
          </Grid>

          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card />
          </Grid>

        </Grid>



        </main>
      </div>

    );
} 

export default ProductsView;