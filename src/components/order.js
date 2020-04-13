import React from 'react';
import Order from './../mobx/orderState';
import { observer } from "mobx-react";
import {Form, Button, Modal, Col} from 'react-bootstrap';
import CartProducts from './../mobx/cartProducts';
import { NavLink } from "react-router-dom";
import {routesList} from './../routes/routes';

@observer export default class extends React.Component{

    render(){
        let people = [];

        for(let person in Order.persons){
            let field = Order.persons[person];
            
            people.push(
                <Form.Group key={field.id} controlId={'order-form-' + person}>       
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={field.value}
                        onChange={(e) => Order.onChange(person, e.target.value)}
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
                <Button variant="primary" onClick={() => Order.handleShow() } disabled={!Order.disabledButton} >
                    Далее
                </Button>
                </Col>
                <Modal show={Order.show} onHide={() => Order.handleClose()}>
                    <Modal.Header closeButton>
                    <Modal.Title>Ваш Заказ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Имя: {Order.persons.name.value}</p>
                        <p>Телефон: {Order.persons.phone.value}</p>
                        <p>Email: {Order.persons.email.value}</p>
                        <p>Общая Сумма: {CartProducts.total}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => Order.handleClose()}>
                            Отмена
                        </Button>
                    <NavLink to={routesList.Result}>
                        <Button variant="primary" onClick={() => Order.handleClose()} >
                            Оплата
                        </Button>
                    </NavLink>
                    </Modal.Footer>
                </Modal>
            </>
            
        );
    }
}