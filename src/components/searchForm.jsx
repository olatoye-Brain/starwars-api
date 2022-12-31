import React, { useEffect, useContext, useRef} from 'react'
import {Form , FormControl } from 'react-bootstrap';
import DropDown from './dropdown';
import { GlobalContext } from "../context/GlobalState";
import api from '../../service/api';

const SearchForm = () => {
    //using contextapi to get result from search inputs
    const { formResultSearch, inputSearchState , searchInput} = useContext(GlobalContext)
    
    const inputSearch = useRef()
    const handleSearchResult = (e) => {
        e.preventDefault()
        setSearchResult(e.target.value)
    }

    const handleUseRef = async(e)=>{
        e.preventDefault()
        let res = inputSearch.current.value.toLowerCase()
        if(res.length === 0) {
            res = 0
        }
        console.log(res.length)
        console.log(searchInput.length)
        inputSearchState(res)

        const { data } = await api.get(`/people/?search=${res}&format=json`)
            console.log(data.results)

            formResultSearch(data.results)
        console.log(data)
    }
    

    return ( 
        <div className="relative">
            <Form className="d-flex searbar-dropdown">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search" ref={inputSearch} onChange={handleUseRef}
                />
            </Form>
            {/* <DropDown/> */}
        </div>
     );
}
 
export default SearchForm;