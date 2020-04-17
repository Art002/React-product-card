import React from 'react';
import {Col, ListGroup} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import {routesList} from './../routes/routes';
import s from './../style.module.css';

export default class extends React.Component{
    render(){
        return(
        <Col md={3}>
            <ListGroup as="ul">
                <NavLink exact to={routesList.home} activeClassName={s.selected}>
                    <ListGroup.Item as="li">
                        Home
                    </ListGroup.Item>
                </NavLink>
                <NavLink exact to={routesList.card} activeClassName={s.selected}>
                    <ListGroup.Item as="li">
                        Card
                    </ListGroup.Item>
                </NavLink>
                <NavLink exact to={routesList.Order} activeClassName={s.selected}>
                    <ListGroup.Item as="li">
                        Order now
                    </ListGroup.Item>
                </NavLink>
            </ListGroup>
        </Col>
        
    )
    }
    
}
