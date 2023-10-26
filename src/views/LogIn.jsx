import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../utils/firebase";
import { signInWithRedirect } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import background from "../assets/edificioBackground.png";
import { AuthGoogle } from "../components/Auth/AuthGoogle";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = async () => {
    try {
      signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleInputChange = (e) => {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };

  return (
    <section>
      <div className={`flex flex-col px-4 gap-4 py-4 mx-auto animate-slide-in`}>
        {" "}
        <div className="flex justify-between items-center">
          <h2 className="text-[2.5rem] font-extrabold">Iniciar Sesión</h2>
          <Link className="underline text-primaryBlue pt-4" to="/registro">
            Registro
          </Link>
        </div>
        <InputForm
          type={"email"}
          title={"Email"}
          name={"email"}
          onChange={handleInputChange}
          placeholder={"ejemplo@gmail.com"}
        />
        <InputForm
          type="password"
          title="Contraseña"
          name="password"
          onChange={handleInputChange}
          placeholder="●●●●●●●●●●●●●●"
        />
        <button
          className="bg-primaryBlue rounded-xl py-3 justify-center text-white text-[1.2rem] font-medium"
          onClick={onLogin}
        >
          INICIAR SESIÓN
        </button>
        <AuthGoogle signInGoogle={signInWithGoogle} />
      </div>
      <img
        className="object-contain w-[100%]"
        src={background}
        alt="background"
      />
    </section>
  );
};

export default LogIn;
