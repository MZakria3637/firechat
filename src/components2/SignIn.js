import React from 'react'
import firebase from "firebase";
import { auth } from "../firbase.js"
import { Button } from "@material-ui/core"
//import {useAuthState} from 'react-firebase-hooks/auth';
function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <div>
            <Button onClick={() => {                
                signInWithGoogle();
            }
            }
            >
                Sign In With Google
            </Button>
        </div>
    )
}

export default SignIn
