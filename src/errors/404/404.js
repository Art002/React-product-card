import React from 'react';
import {routesList} from './../routes/routes';
import {NavLink} from "react-router-dom";

export default () => {
    return (
        <>
            <h1>Error 404, page not found</h1>
            <hr/>
            <div className="alert alert-warning">
                <p>
                    Go to <NavLink to={routesList.home}>Home page</NavLink>
                </p>
            </div>
        </>
    )
}