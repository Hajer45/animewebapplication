import React from 'react'
import {CardMedia,CardActionArea,Card,} from '@mui/material';

const AnimeCard = (props) => {
  return (
    <Card sx={{ width:"200px",height:"300px",margin:"1rem" }}>
        <CardActionArea>
            <CardMedia
                    component="img"
                    height="300px"
                    width="200px"
                    image={props.anime.images.jpg.large_image_url}
                    alt="Anime poster"
                    title={props.anime.title_english}
            />
        </CardActionArea>
    </Card>
  )
}

export default AnimeCard