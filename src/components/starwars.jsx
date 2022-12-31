import React, {useState, useEffect, useContext} from "react";
import Header from './header'
import HomePage from './home'
import SideBar from './sidebar'
import { Container , Row, Col } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
const StarWars = () => {
    const { incomingState, listData, favourites, addFavourites } = useContext(GlobalContext)
    const [localStorageData, setLocalStorageData] = useState(null)   
     
    useEffect(()=>{
        let res
        let localData = localStorage.getItem('favouritesCharacter')
        if(!localData){
            localStorage.setItem('favouritesCharacter', JSON.stringify(favourites))
            return
        }
        if(localData && JSON.parse(localData)?.length){
            res = JSON.parse(localData)
            localStorage.removeItem("favouritesCharacter")
            console.log('found something')
            console.log(JSON.parse(localData))
            setLocalStorageData(res)
            // incomingState(localStorageData)
            if(!favourites?.length){
                res.map(item => {
                    addFavourites(item)
                })
            }
        }
        
    },[])
 

    useEffect(()=>{
        
        const updateFavourite = () => { 
           localStorage.setItem('favouritesCharacter', JSON.stringify(favourites));
        }
        updateFavourite()
        return () => {
            updateFavourite
        }
    },[favourites])

    console.log(favourites)
    console.log(localStorageData)


    return ( 
        <div>
            <Header/>
            <Container className="mt-4">
            <Row>
                <Col md={9} sm={10}>
                    <HomePage/>
                </Col>
                <Col md={3} sm={10} >
                    <SideBar/>
                </Col>
            </Row>
            </Container>
            
        </div>
     );
}
 
export default StarWars;