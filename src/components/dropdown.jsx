import React from 'react'
import { ListGroup } from 'react-bootstrap';

const DropDown = () => {
    
    return ( 
        <div className="position-absolute top-100 z-index-2 searbar-dropdown">
            <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            </ListGroup>
        </div>
     );
}
 
export default DropDown;