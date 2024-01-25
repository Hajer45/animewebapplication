import React from 'react'
import { useMyContext } from '../Context/context'
import { Link } from 'react-router-dom'
import AnimeCard from './AnimeCard'
export const PopularAnimes = ({rendered}) => {
    const {popularAnime,isSearch,searchResults}=useMyContext()
    const popularAnimeRender = ()=>{
       
        if(!isSearch && rendered === 'popular'){
            return popularAnime?.map((anime)=>{
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                   <AnimeCard anime={anime}/>
            </Link>
            })
        }
        else if(isSearch && searchResults){
            console.log(searchResults)
            return searchResults?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                     <AnimeCard anime={anime}/>
                </Link>
            })
        }
    }
  return (
    <div style={{ display: 'flex',flexWrap: 'wrap',flexDirection: 'row', justifyContent: 'space-evenly',height:'100%'}}>
        {popularAnimeRender()}
    
    </div>
  )
}
