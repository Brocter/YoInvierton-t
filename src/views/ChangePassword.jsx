import InputForm from "../components/InputForm";
import React, { useState, useEffect } from "react";
import { changePassword } from "../utils/firebase";
import toast from "../assets/icons/toast.png"

const ChangePassword = () => {
  const [processStatus, setProcessStatus] = useState("form");
  const [newPassword, setNewPassword] = useState({
    original: "",
    nueva: "",
    repeated: "",
  });

  const handleInputChange = (data, field) => {
    setNewPassword((prevData) => ({
      ...prevData,
      [field]: data,
    }));
  };

  const submitChange = () => {
    console.log("change submited", newPassword);
    changePassword(newPassword["original"], newPassword["nueva"]).then(
      (response) => {
        if (response == true) {
          setProcessStatus("toast");
          console.log("El cambio de contraseña fue exitoso", response);
        } else {
          console.log("Error detectado: ", response);
        }
      }
    );
  };

  return (
    <section
      id="main"
      className="flex flex-col items-center p-8 h-[100vh] w-full"
    >
      <div className="w-[20%]">
        {processStatus == "form" && <div>
            <div className="flex font-bold text-[2rem] text-primaryBlue">
                <div className="text-left">Cambiar Contraseña</div>
            </div>
            <div>
                <div className="w-full mt-4">
                Ingresa tu contraseña actual
                <InputForm
                    height={"4"}
                    placeholder={"Contraseña"}
                    onChange={(e) => handleInputChange(e.target.value, "original")}
                />
                </div>
                <div className="w-full mt-4">
                Ingresa la nueva contraseña.
                <InputForm
                    height={"4"}
                    placeholder={"Nueva Contraseña"}
                    onChange={(e) => handleInputChange(e.target.value, "nueva")}
                />
                </div>
                <div className="w-full mt-4">
                Repetila para estar seguro.
                <InputForm
                    height={"4"}
                    placeholder={"Nueva Contraseña"}
                    onChange={(e) => handleInputChange(e.target.value, "repetida")}
                />
                </div>
                <button
                onClick={() => submitChange()}
                className="flex p-1 w-full h-[3rem] bg-primaryBlue justify-center items-center px-5 rounded-md text-white font-[500] text-5 mt-5"
                >
                Confirmar Cambio
                </button>
            </div>
        </div>}
        {processStatus == "toast" && <div className="flex flex-col items-center gap-6">
            <img src={toast} width={"200rem"}/>
            <div className="flex font-bold w-[22rem] text-gray-700 text-[2rem]">
                <div className="text-center">La contraseña se modifico exitosamente</div>
            </div>
            <button
            onClick={() => setProcessStatus("form")}
            className="flex p-1 w-full h-[3rem] bg-primaryBlue justify-center items-center px-5 rounded-md text-white font-[500] text-5 mt-5"
            >
            Regresar
            </button>
            </div>}
        </div>
    </section>
  );
};

export default ChangePassword;
