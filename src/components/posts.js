import React from 'react';
import State from './../mobx/cartState';
import {NavLink} from "react-router-dom";
import {Button} from 'react-bootstrap';
import {routesList} from './../routes/routes';

export default function(props) {
    let oneproduct = State.products.map((item) => {
        if(item.id == props.match.params.id){
            return(
                <div>
                    <hr/>
                    <h2>{item.title}</h2>
                    <hr/>
                    <strong>Цена: {item.price}</strong>
                    <br/><br/>
                    <NavLink to={routesList.home}>
                        <Button variant="primary">
                            Назад
                        </Button>
                    </NavLink>
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