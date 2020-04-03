import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import State from './../mobx/cartState';
import { observer } from "mobx-react";
import s from './../style.module.css';
import {NavLink} from "react-router-dom";
import {Form, Button, FormControl, Col} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'

@observer export default class extends React.Component{

    static propTypes = {
        value: PropTypes.number,
        onChange: PropTypes.func,
        nativeProps: PropTypes.object
    }


    render(){
        let inputs = State.products.map((input, i) => {
            return (
                <div>
                <InputGroup key={input.id} className="mb-1">
                
                <Button variant="primary" onClick={() => State.minus(i) }>-</Button>
                <Col sm={3}>
                <FormControl  
                    type="text" 
                    value={input.current}
                    onChange={(e) => {State.change(i, e.target.value)}}
                    
                />
                </Col>
                <Button variant="primary" onClick={() => State.add(i) }>+</Button>
                <Button variant="primary" onClick={() => State.remove(i) } className={s.deleteButton}>x</Button>
                <strong><span className={s.prices}>{State.price(i)}</span></strong>
                              
                </InputGroup>
                
                </div>
            )
        });
        
        return (
            <React.Fragment>
                    <h2>Cart</h2>
                    <Form>
                        {inputs}
                        <strong>{State.total}</strong>
                    </Form>
                    <NavLink to="/order">
                        <Button variant="primary">
                            Оплата
                        </Button>
                    </NavLink>
                
            </React.Fragment>
            
        );
    }
}

