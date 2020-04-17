import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from 'react-bootstrap';
import {routesList} from './../routes/routes';
import { observer, inject } from "mobx-react";
import s from './../style.module.css';

@inject('state') @observer export default class extends React.Component {
    render(){
        let cartState = this.props.state.cartState;
        let CartProducts = this.props.state.cartProducts;

        let oneproduct = cartState.products.map((products) => {
            let product = CartProducts.products.find(item => item.id == products.id);
            if(products.id == this.props.match.params.id){
                return(
                    <div>
                        <hr/>
                        <h2>{products.title}</h2>
                        <hr/>
                        <strong>Цена: {products.price}</strong>
                        <br/><br/>
                        <NavLink to={routesList.home}>
                            <Button variant="primary">
                                Назад
                            </Button>
                        </NavLink>
                        {(!product) ?
                        <Button variant="warning" 
                        className={s.addCartOne}
                        onClick={() => cartState.pushToCart(products)}
                        >Add to cart</Button> :
                        <Button variant="outline-warning" 
                        className={s.addCartOne}
                        onClick={() => cartState.pushToCart(products)}
                        >Remove from cart</Button>}
                    </div>
                ) 
            }
        })
        return (
            <div>
                {oneproduct}
            </div>
        )
    }
    
}