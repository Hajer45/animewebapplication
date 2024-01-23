import React,{ useReducer,createContext,useContext, useEffect} from "react";

const MyContext = createContext();

const url = "https://api.jikan.moe/v4"

const LOADING = "LOADING"
const SEARCH = "SEARCH"
const POPULARANIME = "POPULAR_ANIME"
const UPCOMINGANIME = "UPCOMING_ANIME"
const AIRINGANIME = "AIRING_ANIME"


const reducer = (state,action)=>{
    switch(action.type){
        case LOADING:
            return{...state,loading:true}
        case POPULARANIME:
            return {...state,popularAnime:action.payload,loading:false}
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


    const getPopularAnime = async()=>{
        dispatch({type:LOADING})
        const response = await fetch(`${url}/top/anime?filter=bypopularity`)
        const data = await response.json()
        dispatch({type:POPULARANIME,payload:data.data})

    }
    useEffect(() => {
        getPopularAnime();
    }, [])
    return(
    <MyContext.Provider value={{
        ...state
    }}>
        {children}
    </MyContext.Provider>
    )

}

export const useMyContext = ()=> {
    return useContext(MyContext)
}