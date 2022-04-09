import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth();
const Login = () => {
    // const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const location = useLocation()
    const navigate = useNavigate();
    
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSignIn = ()=>{
          signInWithGoogle()
          .then(()=>{
            navigate(from, {replace: true})
          })
    }

    return (
        <div>
            <h2>Please Login Here for order!!</h2>
            <div style={{margin: '20px'}}>
                <button onClick={handleGoogleSignIn}> Google Sign In</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;