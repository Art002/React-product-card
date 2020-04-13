import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react";
import s from './../style.module.css';
import {NavLink} from "react-router-dom";
import {Form, Button, FormControl, Col} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {routesList} from './../routes/routes';
import CartProducts from './../mobx/cartProducts';

@observer export default class extends React.Component{

    static propTypes = {
        value: PropTypes.number,
        onChange: PropTypes.func,
    }


    render(){
        let inputs = CartProducts.products.map((input, i) => {
            return (
                <li>
                <InputGroup key={input.id} className="mb-1">      
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" className={s.titlebars}>{input.title}</InputGroup.Text>
                </InputGroup.Prepend>
                <Button variant="primary" onClick={() => CartProducts.minus(i) }>-</Button>
                <Col md={5}>
                <FormControl  
                    type="text" 
                    value={input.current}
                    onChange={(e) => {CartProducts.change(i, e.target.value)}}     
                />
                </Col>
                <Button variant="primary" onClick={() => CartProducts.add(i) }>+</Button>
                <Button variant="primary" onClick={() => CartProducts.remove(i) } className={s.deleteButton}>x</Button>
                <strong><span className={s.prices}>{CartProducts.price(i)}</span></strong>                 
                </InputGroup>
                </li>
            )
        });
        
        return (
            <Col md={{span: 7, offset: 1}}>
                <Form>
                    <ul className={s.inputslist}>{inputs}</ul>
                    <div><strong>Общая сумма: {CartProducts.total}</strong></div>
                    <NavLink to={routesList.Order}>
                        <Button variant="primary">
                            Оплата
                        </Button>
                    </NavLink>
                </Form>
            </Col>
        );
    }
}

