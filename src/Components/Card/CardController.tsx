import React from 'react'
import CardView from './CardView.tsx'

const CardController = (props: any) =>  {

    return (
      <CardView 
        product={props.product}
        handleClickComprar={props.handleClickComprar}
        handleClickFav={props.handleClickFav}  
      />
    );
} 

export default CardController;