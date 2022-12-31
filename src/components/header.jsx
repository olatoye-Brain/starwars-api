import React, { useContext, useEffect, useState } from 'react'
// import { NavLink as Link } from 'react-router-dom'
import SearchForm from './searchForm';
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav , Container } from 'react-bootstrap';



const Header = () => {

    return ( 
        <>
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
            <LinkContainer to="/">
                <Navbar.Brand href="home">Star Wars</Navbar.Brand>
            </LinkContainer>
            <SearchForm/>
            </Container>
        </Navbar>
        </>
       
        
     ); 
        
}
 
export default Header;