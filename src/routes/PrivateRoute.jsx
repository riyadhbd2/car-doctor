import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (user?.email) {
        return children;
    }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>
}

export default PrivateRoute