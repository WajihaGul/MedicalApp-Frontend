import React from 'react';
import { auth } from '../Firebase.js'; // Adjust the path as necessary
import { Button } from '@mui/material';
import { GoogleAuthProvider } from 'firebase/auth'; // Import GoogleAuthProvider

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider(); // Create a new instance of GoogleAuthProvider
        auth.signInWithPopup(provider); // Sign in with Google popup
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In with Google</Button>
        </div>
    );
};

export default SignIn;

