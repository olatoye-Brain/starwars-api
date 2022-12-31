import React, {useContext, useState, useEffect} from 'react'
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import {ArrowRight} from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const StarWarsList = ({handleAddFavourites, message}) => {
     const { addFavourites, favourites, listData,  incomingState } = useContext(GlobalContext)
    
    return ( 
        <div>
            <Row>
                <h6 className="text-center text-bold">{message}</h6>
                {listData[0]?.map(item => ( 
                    <Col key={item.created} xs={12} md={4} className="mb-4">
                        <Card>
                            <Card.Header as="h6">{item.name}</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Hair Color: {item.hair_color}</ListGroup.Item>
                                    <ListGroup.Item>Year: {item.birth_year}</ListGroup.Item>
                                    <ListGroup.Item>Gender: {item.gender}</ListGroup.Item>
                                    <ListGroup.Item>Vehicles: {item.vehicles?.length}</ListGroup.Item>
                                    <ListGroup.Item>
                                        
                                        Films: {item.films.length > 0 && item.films.map((film, index )=>(
                                            <span key={index} className="mr-4">
                                                {film.substring(30, 28).replace(/[\/\\]/g,'')}
                                                <span> </span>
                                            </span>
                                            
                                        ))}
                                    </ListGroup.Item>

                                </ListGroup>
                                <Row>
                                    <Col md={7} xs={6}>
                                        <Button className={`${favourites.some(char => char.created == item.created) ? `btn-secondary` : `btn-danger` } btn text-white btn-sm text-sm`} onClick={() => handleAddFavourites(item)}>{ favourites.some(char => char.created == item.created) ?"Added Already": "Add Favourite"}</Button>
                                    </Col>
                                    <Col md={5} xs={6}>
                                        <Link to={`/people/${item.url.substring(32, 28).replace(/[\/\\]/g,'')}`} className="btn btn-primary btn-sm text-sm">More <ArrowRight className="text-sm" /> </Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
     );
}
 
export default StarWarsList;