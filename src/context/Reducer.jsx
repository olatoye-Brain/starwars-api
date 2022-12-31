import React from 'react'
import ACTION from './Action'

const Reducer = (state, action) => {
    switch (action.type) {

        case ACTION.RESULT_SEARCHES_SWAPI:
            return {
                ...state, resultSearched: [action.payload]
            }
        case ACTION.SEARCH_FORM:
            return {
                ...state, searchInput: action.payload
            }
        case ACTION.ADD_FAVOURITES:
        return {
            ...state, favourites: [...state.favourites, action.payload]
        }
        case ACTION.REMOVE_FAVOURITES:
        return {
            ...state, favourites: state.favourites.filter(char => char.created !== action.payload)
        }
        case ACTION.DATA_LIST:
        return {
            ...state, listData: [action.payload]
        }
        default:
            return state
    }
}    


export default Reducer;