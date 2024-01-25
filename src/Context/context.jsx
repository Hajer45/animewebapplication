import React,{ useReducer,createContext,useContext, useEffect,useState} from "react";

const MyContext = createContext();

const url = "https://api.jikan.moe/v4"

const LOADING = "LOADING"
const SEARCH = "SEARCH"
const POPULARANIME = "POPULAR_ANIME"
const UPCOMINGANIME = "UPCOMING_ANIME"
const AIRINGANIME = "AIRING_ANIME"
const GETPICTURES = "GETPICTURES";


const reducer = (state,action)=>{
    switch(action.type){
        case LOADING:
            return{...state,loading:true}
        case POPULARANIME:
            return {...state,popularAnime:action.payload,loading:false}
        case SEARCH:
            return {...state,searchResults:action.payload,loading:false}
        case UPCOMINGANIME:
            return {...state, upcomingAnime: action.payload, loading: false}
        case AIRINGANIME:
            return {...state, airingAnime: action.payload, loading: false}
        case GETPICTURES:
            return {...state, pictures: action.payload, loading: false}
        default:
            return state
    }
}
export const MyContextProvider = ({children}) =>{
    const initialState = {
        popularAnime:[],
        upcomingAnime:[],
        airingAnime:[],
        pictures:[],
        isSearch:false,
        searchResults:[],
        loading:false,
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const [search, setSearch] = useState('');


    const handleChange = (e) => {
        setSearch(e.target.value);
        if(e.target.value === ''){
            state.isSearch = false;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(search){
            searchAnime(search);
            state.isSearch = true;
        }else{
            state.isSearch = false;
            alert('Please enter a search term')
        }
    }


    const getPopularAnime = async()=>{
        dispatch({type:LOADING})
        const response = await fetch(`${url}/top/anime?filter=bypopularity`)
        const data = await response.json()
        dispatch({type:POPULARANIME,payload:data.data})

    }
    const getUpcomingAnime = async () => {
        dispatch({type: LOADING})
        const response = await fetch(`${url}/top/anime?filter=upcoming`);
        const data = await response.json();
        dispatch({type: UPCOMINGANIME, payload: data.data})
    }
    const getAiringAnime = async () => {
        dispatch({type: LOADING})
        const response = await fetch(`${url}/top/anime?filter=airing`);
        const data = await response.json();
        dispatch({type: AIRINGANIME, payload: data.data})
    }
    const searchAnime = async (anime) => {
        dispatch({type: LOADING})
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`);
        const data = await response.json();
        dispatch({type: SEARCH, payload: data.data})
    }

    const getAnimePictures = async (id) => {
        dispatch({type: LOADING})
        const response = await fetch(`https://api.jikan.moe/v4/characters/${id}/pictures`);
        const data = await response.json();
        dispatch({type: GETPICTURES, payload: data.data})
    }

    useEffect(() => {
        getPopularAnime();
    }, [])
    return(
    <MyContext.Provider value={{
        ...state,handleChange,handleSubmit,searchAnime,search,getPopularAnime,
        getUpcomingAnime,
        getAiringAnime,
        getAnimePictures,
    }}>
        {children}
    </MyContext.Provider>
    )

}

export const useMyContext = ()=> {
    return useContext(MyContext)
}