import React from 'react';
import { AuthInputs } from '../components/AuthInputs';
import {auth, googleProvider} from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { AuthGoogle } from '../components/AuthGoogle';

export const SignIn = () => {
    
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
    }

    const signInWithGoogle = async () => {
        try {
            signInWithPopup(auth, googleProvider)
        } catch (error) {
            console.error(error);
        }
    }
    
    const handleInputChange = (e) => {
        if(e.target.name === 'password'){
            setPassword(e.target.value);
        } else if(e.target.name === 'email'){
            setEmail(e.target.value);
        }
    }

    return(
        <div className='flex flex-col'>
            <h1>Iniciar sesion</h1>
            <AuthInputs handleInput={handleInputChange}/>
            <button onClick={signIn}>Iniciar Sesión</button>
            <AuthGoogle signInGoogle={signInWithGoogle}/>
        </div>
    )
}