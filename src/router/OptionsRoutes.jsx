import React from 'react';
import {Route} from "react-router-dom";
import {useSelector} from "react-redux";


export const PrivateRoute = ({component: Component, ReplaceComponent, ...rest}) => {
    const user = useSelector(state => state.user)
    return (
        <Route {...rest} render={(props) => {
            return (user.accessToken ? <Component {...props} /> : <ReplaceComponent/>)
        }}/>
    )
}
