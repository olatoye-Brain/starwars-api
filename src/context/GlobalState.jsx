import React, { useEffect } from 'react'
import { useReducer, createContext } from 'react'
import Reducer from './Reducer'
import ACTION from './Action'

const initialState = {
    resultSearched: [],
    searchInput: '',
    favourites: [],
    listData: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    
    const formResultSearch = (results) => { 
        dispatch({
            type: ACTION.RESULT_SEARCHES_SWAPI,
            payload: results
        })
    }

    const inputSearchState = (input) => {
        dispatch({
            type: ACTION.SEARCH_FORM,
            payload: input
        })
    }

    const addFavourites = (data) => {
        dispatch({
            type: ACTION.ADD_FAVOURITES,
            payload: data
        })
    }
    const removeFavourites = (dataId) => {
        dispatch({
            type: ACTION.REMOVE_FAVOURITES,
            payload: dataId
        })
    }
    const homePageData = (data) => { 
        dispatch({
            type: ACTION.DATA_LIST,
            payload: data
        })
    }
 



    useEffect(() => {
        console.log(state)
    })

    return (
        <GlobalContext.Provider value={{
            state: state,
            resultSearched: state.resultSearched,
            searchInput: state.searchInput,
            favourites: state.favourites,
            listData: state.listData,
            formResultSearch,
            inputSearchState,
            addFavourites,
            removeFavourites,
            homePageData
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
