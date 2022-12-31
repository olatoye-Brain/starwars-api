import { Navigate, Route } from 'react-router-dom'
import React, { useContext } from 'react';
import { GlobalContext } from "../src/context/GlobalState"


const ProtectedRoute = ({component: Component, ...restOfProps}) => {
    const { userLoggin } = useContext(GlobalContext)

    return ( 
        <Route
            {...restOfProps}
            render = {(props) =>
                userLoggin ? <Component {...props} /> : <Navigate to="/" />
            }
        />

      
     );
}
 
export default ProtectedRoute ;