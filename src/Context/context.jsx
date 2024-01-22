import React,{ useReducer,createContext,useContext} from "react";

const MyContext = createContext();

const url = "https://api.jikan.moe/v4"

const reducer = (action,state)=>{
    return state;
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