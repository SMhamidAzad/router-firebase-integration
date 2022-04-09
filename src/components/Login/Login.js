import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const auth = getAuth();
const Login = () => {
    // const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [signInWithGoogle] = useSignInWithGoogle(auth)

    return (
        <div>
            <h2>This is login componets</h2>
            <div style={{margin: '20px'}}>
                <button onClick={()=>signInWithGoogle()}> Google Sign In</button>
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