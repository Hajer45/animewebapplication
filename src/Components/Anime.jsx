import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import CharacCard from './CharacCard'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Anime() {
    const {id} = useParams()

    //state
    const [anime, setAnime] = useState({})
    const [characters, setCharacters] = useState([])
    const [showMore, setShowMore] = useState(false)

    //destructure anime
    const {
        title, synopsis, 
        trailer,duration,aired, 
        season, images, rank, 
        score,scored_by, popularity, 
        status, rating, source } = anime

    //get anime based on id
    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
    }

    //get characters
    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)
        console.log(data.data)
    }


    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    }, [id])

    return (
        <AnimeStyled>
            <div className="back">
                <Link to="/">
                    <ArrowBackIcon/>
                    Return
                </Link>
            </div>
            <h1>{title}</h1>
            <div className="details">
                <div className="detail">
                    <div className="image">
                        <img src={images?.jpg.large_image_url} alt="" />
                    </div>
                    <div className="anime-details">
                        <p><span>Aired:</span><span>{aired?.string}</span></p>
                        <p><span>Rating:</span><span>{rating}</span></p>
                        <p><span>Rank:</span><span>{rank}</span></p>
                        <p><span>Score:</span><span>{score}</span></p>
                        <p><span>Scored By:</span><span>{scored_by}</span></p>
                        <p><span>Popularity:</span><span>{popularity}</span></p>
                        <p><span>Status:</span><span>{status}</span></p>
                        <p><span>Source:</span><span>{source}</span></p>
                        <p><span>Season:</span><span>{season}</span></p>
                        <p><span>Duration:</span><span>{duration}</span></p>
                    </div>
                </div>
                <p className="description">
                    {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                    <button onClick={() => {
                        setShowMore(!showMore)
                    }}>{showMore ? 'Show Less': 'Read More'}</button>
                </p>
            </div>
            <h3 className="title">Trailer</h3>
            <div className="trailer-con">
                {trailer?.embed_url ? 
                    <iframe 
                        src={trailer?.embed_url} 
                        title="Inline Frame Example"
                        width="800"
                        height="450"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe> :
                    <h3>Trailer not available</h3>
                }
            </div>
            <h3 className="title">Characters</h3>
            <div className="characters">
                {characters?.map((character, index) => {
                    const {role} = character
                    const {images, name, mal_id} = character.character
                    return <Link to={`/character/${mal_id}`} key={index}>
                        <div className="character">
                            <CharacCard images={images} role={role} name={name}/>
                        </div>
                    </Link>
                })}
            </div>
        </AnimeStyled >
    )
}

const AnimeStyled = styled.div`
    padding: 3rem 18rem;
    background-color: #EDEDED;
    align-items:center;
    .back{
        position: absolute;
        top: 3rem;
        left: 0rem;
        a{
            font-weight: 600;
            text-decoration: none;
            color:#0A1D56;
            display: flex;
            padding:1rem;
            align-items: center;
            gap: .5rem;
        }
    }
    h1{
        display: inline-block;
        font-size: 3rem;
        margin-bottom: 1.5rem;
        cursor: pointer;
        background:linear-gradient( to right,  #0A1D56,#492E87);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all .4s ease-in-out;
        &:hover{
            transform: skew(-3deg);
        }
    }
    .title{
        display: inline-block;
        margin: 3rem 0;
        font-size: 2rem;
        cursor: pointer;
        background:linear-gradient(to right,  #0A1D56,#492E87);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .description{
        margin-top: 2rem;
        color: #6c7983;
        line-height: 1.7rem;
        button{
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 1.2rem;
            color: #492E87;
            font-weight: 600;
        }
    }

    .trailer-con{
        display: flex;
        justify-content: center;
        align-items: center;
        iframe{
            outline: none;
            border: 5px solid #e5e7eb;
            padding: 1.5rem;
            border-radius: 10px;
            background-color: #FFFFFF;
        }
    }

    .details{
        background-color: #fff;
        border-radius: 20px;
        padding: 2rem;
        border: 5px solid #e5e7eb;
        .detail{
            display: flex;
            justify-content:space-between;
            flex-wrap:wrap;
            img{
                border-radius: 7px;
                width:100%;
                height: auto;
            }
        }
        .anime-details{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
                display: flex;
                gap: 1rem;
            }
            p span:first-child{
                font-weight: 600;
                color: #454e56;
            }
        }
    }

    .characters{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 2rem;
        background-color: #fff;
        padding: 2rem;
        border-radius: 20px;
        border: 5px solid #e5e7eb;
        .character{
            padding: .4rem .6rem;
            transition: all .4s ease-in-out;
            &:hover{
                transform: translateY(-5px);
            }
        }
    }
    @media screen and (max-width: 768px) {
        padding: 2rem 5%;
        .trailer-con {
          iframe {
            width: 100%;
          }
        }
      }
`;

export default Anime