import React from 'react';
import s from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { observer } from "mobx-react";
import Routes from './routes/routes';
import Sidenav from './components/sidenav';
import {Row} from 'react-bootstrap';

@ observer export default class extends React.Component{
    

    render(){
        let routesComponents = Routes.map((route) => {
            return <Route path={route.url}
                          component={route.component}
                          exact={route.exact} 
                          key={route.url}
                    />;
        });
        return ( 
            <Router>        
                <div className={s.wrapper}>
                <Row>
                <Sidenav/>
                <Switch>
                    { routesComponents }
                </Switch>
                </Row>
                </div>
            </Router>  
        );
    }
}


