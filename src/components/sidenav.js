import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Col} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import {routesList} from './../routes/routes';

export default class extends React.Component{
    render(){
        return(
        <Col md={3}>
            <ListGroup as="ul">
                <NavLink to={routesList.home}>
                    <ListGroup.Item as="li">
                        Home
                    </ListGroup.Item>
                </NavLink>
                <NavLink to={routesList.card}>
                    <ListGroup.Item as="li">
                        Card
                    </ListGroup.Item>
                </NavLink>
                <NavLink to={routesList.Order}>
                    <ListGroup.Item as="li">
                        Order now
                    </ListGroup.Item>
                </NavLink>
            </ListGroup>
        </Col>
        
    )
    }
    
}
