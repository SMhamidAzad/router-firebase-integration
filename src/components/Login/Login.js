import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}= useFirebase()
    return (
        <div>
            <h2>This is login componets</h2>
            <div style={{margin: '20px'}}>
                <button onClick={signInWithGoogle}> Google Sign In</button>
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