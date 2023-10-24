import { useState } from 'react';
import {auth, googleProvider} from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithRedirect} from 'firebase/auth';
import background from "../assets/edificioBackground.png"
import Step1 from '../components/RegisterSteps/Step1';
import Step2 from '../components/RegisterSteps/Step2';
import Step3 from '../components/RegisterSteps/Step3';
import { useNavigate } from 'react-router-dom';



const Register = () => {
    
    const navigate = useNavigate()
    const [formData, setFormData] = useState({email:"",
    password:"",
    repeatPassword:"",
    name:"",
    lastName:"",
    DNI: "",
    }
        
    )
    const [step, setStep] = useState(1);
    
   
    const handleNext = () => {
        // Validation logic here
        setStep(step + 1);
      };
    
      const handlePrevious = () => {
        setStep(step - 1);
      };
    

    const signInWithGoogle = async () => {
        try {
            signInWithRedirect(auth, googleProvider)
        } catch (error) {
            console.error(error);
        }
    }
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const onSubmit = async (e) => {
        e.preventDefault()
       
        await createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigate("/home")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
        }

    return(
        <section>
         {step === 1 && (
        <Step1 signInWithGoogle={signInWithGoogle} handleInputChange={handleInputChange} onNext={handleNext}/>)}
        {step === 2 && (
        <Step2 handleInputChange={handleInputChange} onNext={handleNext} onPrev={handlePrevious}/>)}
        {step === 3 && (
        <Step3 handleInputChange={handleInputChange} onSubmit={onSubmit} onPrev={handlePrevious}/>)}
        <img className="object-contain w-[100%]" src={background} alt="background" />
        </section>
    )
}

export default Register;