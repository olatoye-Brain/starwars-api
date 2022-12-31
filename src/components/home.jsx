import React , {useState, useEffect, useContext, useRef} from 'react'
import StarWarsList from './starwarsList'
import SearchDisplay from './searchDisplay'
import PaginationItem from './pagination';
import StarWarDetails from './starwarsDetails';
import api from "../../service/api";
import { GlobalContext } from '../context/GlobalState';



const HomePage = () => {
    const { searchInput, homePageData, favourites, addFavourites } = useContext(GlobalContext)
    const [message, setMessage] = useState('Display List')
    const [count, setCount] = useState(1)
    

    console.log(searchInput.length)
    //calling the swapi.dev api
    useEffect(()=>{
        const getData= async () => { 
            const { data } = await api.get(`/people/?page=${count}&format=json`)
            if(data.next){       
                homePageData(data.results)
                console.log(data.results)
            }
        }
        getData()
        return () => { 
            getData
        }
    }, [count])
   


    const handleAddFavourites = (item) => { 

        const { name, url, created, hair_color } = item
        
        const newFavourites = { 
            name, url, created, hair_color
        }
        const character = favourites.find(char => char.created == created)
        console.log(character)
        if(!character){
            addFavourites(newFavourites)
            console.log(favourites)
            localStorage.setItem('favouritesCharacter', JSON.stringify(favourites));
        }else{
        setMessage('Character already added')
        setTimeout(()=>{
            setMessage('Display List')
        },1500)
        return
        }
    }
    

    return ( 
        <div>
            <h4 className='text-primary text-center'>Starwars Data</h4>
                { searchInput.length > 0 ?
                    <SearchDisplay handleAddFavourites={handleAddFavourites}/> 
                    :
                    
                    <>
                        <StarWarsList handleAddFavourites={handleAddFavourites} message={message}/>
                        <PaginationItem count={count} setCount={setCount}/>
                    </>

                }
        </div>
     );
}
 
export default HomePage;