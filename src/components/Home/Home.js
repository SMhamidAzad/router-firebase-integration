import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>Welcome to our Website</h1>
            <p>Current User is: {user ? user.displayName : "Please Login this site..."} </p>
        </div>
    );
};

export default Home;