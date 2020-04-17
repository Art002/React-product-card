import React from 'react';
import { observer, inject } from "mobx-react";
import {NavLink} from "react-router-dom";
import {urlBuilder} from './../routes/routes';
import {Card, Button, Col, Row} from 'react-bootstrap';
import s from './../style.module.css';

@inject('state') @observer export default class extends React.Component{ 
    render(){
        let CartProducts = this.props.state.cartProducts;
        let cartState = this.props.state.cartState;
        let inputs = cartState.products.map((input, i) => {
            let product = CartProducts.products.find(item => item.id == input.id);
            return (
                <Col md={3}>
                <Card style={{ width: '14rem' }}>
                <Card.Body>
                <Card.Title>{input.title}</Card.Title>
                    <Card.Text>
                    <strong>Price: {input.price}</strong>
                    </Card.Text>
                    <NavLink to={urlBuilder('product', {id: input.id})}>
                        <Button variant="primary">See more</Button>
                    </NavLink>
                    {(!product) ?
                    <Button variant="warning" 
                    className={s.addtocartbtn}
                    onClick={() => cartState.pushToCart(input)}
                    >Add to cart</Button> :
                    <Button variant="outline-warning" 
                    className={s.addtocartbtn}
                    onClick={() => cartState.pushToCart(input)}
                    >Remove from cart</Button>}         
                </Card.Body>
                </Card>
                </Col>
            )
        });
        return(
            <Row>
            {inputs}
            </Row>
        )
    }
}