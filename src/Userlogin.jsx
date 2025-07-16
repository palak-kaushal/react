import React from 'react'
import { app } from './firebase'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const UserLogin = () => {
    const handleClick = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log("User is logged in via Google:", user);
                alert(`Welcome ${user.displayName}`);
            })
            .catch((err) => {
                console.error("Login failed:", err);
                alert("Login failed: " + err.message);
            });
    };

    return (
        <div>
            <button 
                onClick={handleClick} 
                style={{ padding: '10px 20px', backgroundColor: '#4285F4', color: 'white', border: 'none', borderRadius: '5px' }}
            >
                Sign in with Google
            </button>
        </div>
    );
};

export default UserLogin
