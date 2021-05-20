import React, {useContext} from 'react';
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from './AuthContext';

const PrivateRoute = ({component, redirectPath, ...rest}) => {
        const {isAuthenticated} = useContext(AuthContext);

        return isAuthenticated ? (
            <Route {...rest} component={component} />
        ) : (
            <Redirect to={{pathname: redirectPath}} />
        )
    };

export default PrivateRoute;
