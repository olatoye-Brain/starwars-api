import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, ListGroup, Button, Container} from 'react-bootstrap';
import Header from './header';
import SideBar from './sidebar';
import SearchDisplay from './searchDisplay';
import api from '../../service/api'

const StarWarDetails = () => {
    const [data, setData] = useState('')
    const { favourites, addFavourites, searchInput } = useContext(GlobalContext)
    const { id } = useParams()
    console.log(id)
    useEffect(()=>{
        //calling the api
        const getData = async () => { 
            const { data } = await api.get(`https://swapi.dev/api/people/${id}/?format=json`)
            if(data){       
                console.log(data)
                setData(data)
            }
        }
        getData()

        return () => { 
            getData
        }

    },[id])

    data !== null && console.log(data)

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
            <Header/>
            <Container className="mt-4">
            <Row>
                <Col md={9} sm={10}>
                { searchInput.length > 0 ?
                    <SearchDisplay handleAddFavourites={handleAddFavourites}/> 
                    :
                        <Card>
                            { 
                                data &&
                                <>
                                <Card.Header as="h5" className="text-primary">{data.name}</Card.Header>
                                    <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Year: {data.birth_year}</ListGroup.Item>
                                        <ListGroup.Item>Gender: {data.gender}</ListGroup.Item>
                                        <ListGroup.Item>Mass: {data.mass}</ListGroup.Item>
                                        <ListGroup.Item>Height: {data.height}</ListGroup.Item>
                                        <ListGroup.Item>Hair Color: {data.hair_color}</ListGroup.Item>
                                        <ListGroup.Item>Eye Color: {data.eye_color}</ListGroup.Item>
                                        <ListGroup.Item>Skin Color: {data.skin_color}</ListGroup.Item>
                                        <ListGroup.Item>Vehicles: {data.vehicles?.length}</ListGroup.Item>
                                        <ListGroup.Item>Starships: {data.starships?.length}</ListGroup.Item>
                                        <ListGroup.Item>
                                            
                                            Films: {data.films.length > 0 && data.films.map((film, index )=>(
                                                <span key={index} className="mr-4">
                                                    {film.substring(30, 28).replace(/[\/\\]/g,'')}
                                                    <span> </span>
                                                </span>
                                            ))}
                                        </ListGroup.Item>

                                    </ListGroup>
                                    <Button className={`${favourites.some(char => char.created == data.created) ? `btn-secondary` : `btn-danger` } btn text-white btn-sm text-sm`} onClick={() => handleAddFavourites(data)}>{ favourites.some(char => char.created == data.created) ?"Added Already": "Add Favourite"}</Button>
                                </Card.Body>
                                </>
                            }
                        </Card>
                   }
                </Col>
                <Col md={3} sm={10} >
                    <SideBar/>
                </Col>
            </Row>
            </Container>
        </div>
     );
}
 
export default StarWarDetails;