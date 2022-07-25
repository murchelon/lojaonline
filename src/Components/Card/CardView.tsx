import React from 'react'
import CardStyles from './Card.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';





const CardView = () =>  {

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
              Nome bem comprido de um produto que vai aparecer
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget accumsan sem. Aenean lacus metus, porta sit amet massa eget, placerat bibendum sapien
            </Typography>
          </CardContent>
          <CardActions>
            <div className={CardStyles.actionsContainer}>
              <IconButton aria-label="Adicionar ao Favoritos">
                <FavoriteIcon />
              </IconButton>

              <Button size="small">Comprar!</Button>

            </div>
          </CardActions>
        </Card>
      </div>

    );
} 

export default CardView;