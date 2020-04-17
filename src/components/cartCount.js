import React from 'react';
import {NavLink} from "react-router-dom";
import {Col, Button} from 'react-bootstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import {routesList} from './../routes/routes';
import { observer, inject } from "mobx-react";
import s from './../style.module.css';

@inject('state') @observer export default class extends React.Component{
    render(){
        let cartProducts = this.props.state.cartProducts;
        return(
            <Col md={{ span: 2, offset: 10 }}>
                В корзине: {cartProducts.products.length} товаров
                <NavLink to={routesList.card}>
                    <Button variant="outline-dark" className={s.inCartButton}><MdAddShoppingCart /></Button>
                </NavLink>
                <hr/>
            </Col>
        )
    }
}