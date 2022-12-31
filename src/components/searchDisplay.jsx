import React, {  useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import {Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {ArrowRight} from 'react-bootstrap-icons';

const SearchDisplay = ({handleAddFavourites}) => {

    const { searchInput, resultSearched, favourites, inputSearchState} = useContext(GlobalContext)

    console.log(searchInput.length)

    return ( 
        <Container>
            <Row>
                <h6 className="text-primary">Search Result: {resultSearched[0]?.length} </h6>
                <Col md={12} sm={10}>
                    {resultSearched[0]?.map(item => (
                        <Card key={item.created} className="mb-2">
                            <Card.Header as="h6">{item.name}</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Year: {item.birth_year}</ListGroup.Item>
                                    <ListGroup.Item>Gender: {item.gender}</ListGroup.Item>
                                    <ListGroup.Item>Skin Color: {item.skin_color}</ListGroup.Item>
                                </ListGroup>
                                {/* <Button className={`${favourites.some(char => char.created == item.created) ? `btn-secondary` : `btn-danger` } btn text-white btn-sm text-sm`} onClick={() => handleAddFavourites(item)}>{ favourites.some(char => char.created == item.created) ?"Added Already": "Add Favourite"}</Button> */}
                                        <Button className={`${favourites.some(char => char.created == item.created) ? `btn-secondary` : `btn-danger` } btn text-white btn-sm text-sm`} onClick={() => handleAddFavourites(item)}>{ favourites.some(char => char.created == item.created) ?"Added Already": "Add Favourite"}</Button>
                                        <span>  </span>
                                        <Link to={`/people/${item.url.substring(32, 28).replace(/[\/\\]/g,'')}`} className="btn btn-primary btn-sm text-sm" onClick={() => inputSearchState('')}>More <ArrowRight className="text-sm" /> </Link>
                            </Card.Body>

                        </Card>
                    ))} 
                </Col>
            </Row>
        </Container>

        
        
    )
}
 
export default SearchDisplay;