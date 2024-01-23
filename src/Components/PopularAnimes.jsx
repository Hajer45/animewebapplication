import React from 'react'
import { useMyContext } from '../Context/context'
import { Link } from 'react-router-dom'
import {CardMedia,CardActionArea,Card,} from '@mui/material';

export const PopularAnimes = () => {
    const {popularAnime,isSearch}=useMyContext()
    const popularAnimeRender = ()=>{
        if(!isSearch){
            /*console.log(popularAnime)*/
            return popularAnime.map((anime)=>{
                console.log(anime)
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <Card sx={{ width:"200px",height:"300px" ,margin:'1em'}}>
                        <CardActionArea>
                        <CardMedia
                    component="img"
                    height="300px"
                    width="200px"
                    image={anime.images.jpg.large_image_url}
                    alt="Anime poster"
                    title={anime.title_english}
                    />
                </CardActionArea>
                </Card>
            </Link>
            })
        }
    }
  return (
    <div style={{ display: 'flex',flexWrap: 'wrap',flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {popularAnimeRender()}
    
    </div>
  )
}
