import { useState, createContext, useContext, useEffect } from 'react';
import { GmailInput } from '../components/Auth/GmailInput';
import {auth, googleProvider} from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithRedirect} from 'firebase/auth';
import { AuthGoogle } from '../components/Auth/AuthGoogle';
import { Link } from 'react-router-dom';
import background from "../assets/edificioBackground.png"
import PasswordInput from '../components/Auth/PasswordInput';



const Register = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [load, setLoad] = useState(false);
    
    useEffect(() => {
        setLoad(true)
    },[])

    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
    }

    const signInWithGoogle = async () => {
        try {
            signInWithRedirect(auth, googleProvider)
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
        <section>
        <div className={`flex flex-col px-4 mx-auto py-4 translate-x-[100%] ease-in duration-[600ms] ${load ? "translate-x-[0%] transition-all " : ""}`}>
            <div className='flex justify-between items-center'>
            <h2 className='text-[2.5rem] font-extrabold'>Crear Cuenta</h2>
            <Link className="underline text-primaryBlue pt-4"to="/iniciar-sesion">Iniciar Sesión</Link>
            </div>
            
            <GmailInput handleInput={handleInputChange}/>
            <PasswordInput handleInput={handleInputChange}/>
            <Link to></Link>
            <button className="bg-primaryBlue rounded-xl py-3 justify-center text-white text-[1.2rem] font-medium" onClick={register}>CREAR CUENTA</button>
            <AuthGoogle signInGoogle={signInWithGoogle}/>
        </div>
        <img className="object-contain w-[100%]" src={background} alt="background" />
        </section>
    )
}

export default Register;