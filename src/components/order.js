import React from 'react';
import { observer, inject } from "mobx-react";
import {Form, Button, Modal, Col} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import {routesList} from './../routes/routes';

@inject('state') @observer export default class extends React.Component{
    render(){
        let people = [];
        let CartProducts = this.props.state.cartProducts;
        let orderState = this.props.state.orderState;
        for(let person in orderState.persons){
            let field = orderState.persons[person];
            
            people.push(
                <Form.Group key={field.id} controlId={'order-form-' + person}>       
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={field.value}
                        onChange={(e) => orderState.onChange(person, e.target.value)}
                        pattern={field.pattern}
                    /> 
                    {field.showMsg}    
                </Form.Group>
            )
        }
        
        return (
            <>
                <Col md={6}>
                <h2>Order</h2>
                <hr/>
                <Form>
                    {people}
                </Form>
                <NavLink to={routesList.card}>
                    <Button variant="primary">
                        Отмена
                    </Button>
                </NavLink>
                <Button variant="primary" onClick={() => orderState.handleShow() } disabled={!orderState.disabledButton} >
                    Далее
                </Button>
                </Col>
                <Modal show={orderState.show} onHide={() => orderState.handleClose()}>
                    <Modal.Header closeButton>
                    <Modal.Title>Ваш Заказ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Имя: {orderState.persons.name.value}</p>
                        <p>Телефон: {orderState.persons.phone.value}</p>
                        <p>Email: {orderState.persons.email.value}</p>
                        <p>Общая Сумма: {CartProducts.total}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => orderState.handleClose()}>
                            Отмена
                        </Button>
                    <NavLink to={routesList.Result}>
                        <Button variant="primary" onClick={() => orderState.handleClose()} >
                            Оплата
                        </Button>
                    </NavLink>
                    </Modal.Footer>
                </Modal>
            </>
            
        );
    }
}