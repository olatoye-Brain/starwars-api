import React,{ useContext, useEffect} from "react";
import { GlobalContext } from '../context/GlobalState';
import { XCircleFill } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { Card, ListGroup, Badge} from 'react-bootstrap';

const SideBar = () => {
    const { favourites, removeFavourites } = useContext(GlobalContext)
    console.log(favourites)
   
    return ( 
        <div className="postion-sidebar">
            <Card border="primary sidebar">
                <Card.Body>
                <Card.Title>Favourite Character</Card.Title>
                {
                    favourites.map( char => (

                        <ListGroup key={char.created} variant="flush">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <Link className="text-decoration-none" to={`/people/${char.url.substring(32, 28).replace(/[\/\\]/g,'')}`}>{char.name}</Link>

                                </div>
                                <XCircleFill onClick={() => removeFavourites(char.created)} className="text-primary"/>
                            </ListGroup.Item>
                        </ListGroup>
                    ))
                }
                    
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default SideBar;