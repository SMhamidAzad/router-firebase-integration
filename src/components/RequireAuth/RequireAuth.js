import React from 'react';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

const auth = getAuth(app)
const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth)
    const location = useLocation()
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    /* 
    const [user] = useAuthState(auth)
    const location = useLocation()
    if(!user){
         return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
    in app.js,
    <Route path='/orders' element={
        <RequireAuth></RequireAuth>
    }></Route>
    */
    return children;
};

export default RequireAuth;