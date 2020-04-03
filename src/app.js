import React from 'react';
import s from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/input';
import Order from './components/order';
import Result from './components/result';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { observer } from "mobx-react";

@ observer export default class extends React.Component{
    

    render(){
        return ( 
            <Router>        
                <div className={s.wrapper}>
                <Switch>
                    <Route exact path="/">
                        <Input />
                    </Route>
                    <Route path="/order">
                        <Order />
                    </Route>
                    <Route path="/result">
                        <Result />
                    </Route>
                </Switch>
                </div>
            </Router>  
        );
    }
}


