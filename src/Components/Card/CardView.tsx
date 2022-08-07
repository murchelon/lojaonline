import React from 'react'
import { NextPage } from 'next'
import CardStyles from './Card.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';





const CardView: NextPage = (props: any) =>  {

    const fullName: string = props.product.name
    const isFavorite: boolean = props.product.favorite

    let shortName: string = ''

    let _namepart: Array<string> = fullName.split(' ')
    
    for (var x=0 ; x<=_namepart.length - 1 ; x++)
    {
      if (x >= 3) {break;}
      shortName += _namepart[x] + ' '
    }

    shortName = shortName.trim()

    return (
    
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/PDX_a_82obo"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {shortName}
            </Typography>
            <Typography variant="body2" color="text.secondary" className={CardStyles.cardDesc}>
              {fullName}
            </Typography>
          </CardContent>
          <CardActions>
            <div className={CardStyles.actionsContainer}>
              <IconButton aria-label="Adicionar ao Favoritos" onClick={() => props.handleClickFav(props.product._id)}>
                {isFavorite && (<Favorite />)}    
                {!isFavorite && (<FavoriteBorder />)}
              </IconButton>
                <div>
                  US$ {props.product.price}
                </div>
              <Button size="small" onClick={() => props.handleClickComprar(props.product._id)}>Comprar!</Button>
            </div>
          </CardActions>
        </Card>
      </div>

    );
} 

export default CardView;