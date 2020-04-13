import React from 'react';
import { observer } from "mobx-react";
import {NavLink} from "react-router-dom";
import {urlBuilder} from './../routes/routes';
import State from './../mobx/cartState';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import s from './../style.module.css';
import CartProducts from './../mobx/cartProducts';

@observer export default class extends React.Component{
    
    render(){
        let inputs = State.products.map((input, i) => {
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
                    onClick={() => State.pushToCart(input)}
                    >Add to cart</Button> :
                    <Button variant="outline-warning" 
                    className={s.addtocartbtn}
                    onClick={() => State.pushToCart(input)}
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