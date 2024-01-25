import React from 'react'
import { Link } from 'react-router-dom'
import { useMyContext } from '../Context/context'
import AnimeCard from './AnimeCard'


function Upcoming({rendered}) {
    const {upcomingAnime ,isSearch, searchResults} = useMyContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'upcoming'){
            return upcomingAnime?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                     <AnimeCard anime={anime}/>
                </Link>
            })
        }else{
            return searchResults?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                     <AnimeCard anime={anime}/>
                </Link>
            })
        }
    }

    return (
            <div style={{ display: 'flex',flexWrap: 'wrap',flexDirection: 'row', justifyContent: 'space-evenly',height:'100%'}}>
                {conditionalRender()}
            </div>
    )
}



export default Upcoming