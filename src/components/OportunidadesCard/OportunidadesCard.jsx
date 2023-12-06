import React, { useState, useEffect } from "react";
import InputForm from "../../components/InputForm";

export const OportunidadesCard = ({ cardData }) => {
  const {
    departamento,
    background,
    rendimiento,
    minimoInversion,
    porcentaje,
    inversionMax,
    totalInvertido,
    type,
  } = cardData;

  const [cardState, setcardState] = useState("default");
  const [cardOperation, setcardOperation] = useState("default");

  const handleCardState = () => {
    if (cardState == "default") {
      setcardState("edit");
    } else {
      setcardState("default");
    }
  };

  const handleCardOperation = (operation) => {
    setcardOperation(operation)
    handleCardState()
  }

  return (
    <div className="mx-auto border mt-8 max-w-[35rem] border-primaryLightBlue rounded-b-xl rounded-tr-[1.9rem] shadow-lg shadow-primaryLightBlue w-[100%] overflow-hidden md:block">
      <div className="px-4 py-3">
        <h5 className="text-primaryBlue font-bold text-[1.2rem]">
          {departamento}
        </h5>
        <h6 className="text-[1rem] text-black">Jardin Regazzoni</h6>
      </div>
      <p className="bg-primaryBlue text-center text-white py-1 text-[0.84rem]">
        Proyecto activo - Cobro sobre venta
      </p>
      <img
        className="object-contain w-[100%]"
        src={background}
        alt="background"
        draggable="false"
      />
      {!type && (
        <div className="px-4 mx-auto pb-8">
          <div className="py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M11.4185 11.6539H2.44612C2.24174 11.6539 2.07227 11.4832 2.07227 11.2774C2.07227 11.0716 2.24174 10.9009 2.44612 10.9009H11.4185C11.6229 10.9009 11.7924 11.0716 11.7924 11.2774C11.7924 11.4832 11.6229 11.6539 11.4185 11.6539Z"
                    fill="#4886F8"
                  />
                  <path
                    d="M3.7423 4.43945H2.94476C2.6706 4.43945 2.44629 4.66537 2.44629 4.94149V9.26909C2.44629 9.54521 2.6706 9.77113 2.94476 9.77113H3.7423C4.01646 9.77113 4.24077 9.54521 4.24077 9.26909V4.94149C4.24077 4.66035 4.01646 4.43945 3.7423 4.43945Z"
                    fill="#4886F8"
                  />
                  <path
                    d="M7.33117 2.83789H6.53362C6.25947 2.83789 6.03516 3.06381 6.03516 3.33993V9.26903C6.03516 9.54516 6.25947 9.77107 6.53362 9.77107H7.33117C7.60533 9.77107 7.82964 9.54516 7.82964 9.26903V3.33993C7.82964 3.06381 7.60533 2.83789 7.33117 2.83789Z"
                    fill="#4886F8"
                  />
                  <path
                    d="M10.92 1.23633H10.1225C9.84833 1.23633 9.62402 1.46225 9.62402 1.73837V9.26898C9.62402 9.5451 9.84833 9.77102 10.1225 9.77102H10.92C11.1942 9.77102 11.4185 9.5451 11.4185 9.26898V1.73837C11.4185 1.46225 11.1942 1.23633 10.92 1.23633Z"
                    fill="#4886F8"
                  />
                </svg>
                <p className="text-[0.84rem] pl-1">
                  Rendimiento anual estimado:
                </p>
              </div>
              <h6 className="text-primaryBlue font-bold">{rendimiento}</h6>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M7.30615 8.32291H7.63016C7.95416 8.32291 8.22333 8.03172 8.22333 7.68029C8.22333 7.24352 8.06881 7.15817 7.81459 7.0678L7.31114 6.89209V8.32291H7.30615Z"
                    fill="#4886F8"
                  />
                  <path
                    d="M6.9175 1.28468C4.16596 1.29472 1.93782 3.54888 1.94779 6.32015C1.95776 9.09141 4.19587 11.3355 6.9474 11.3255C9.69894 11.3155 11.9271 9.06129 11.9171 6.29002C11.9071 3.51876 9.66903 1.27966 6.9175 1.28468ZM8.05898 6.35529C8.44779 6.49084 8.97118 6.78202 8.97118 7.68068C8.97118 8.45382 8.36803 9.07635 7.6303 9.07635H7.3063V9.36753C7.3063 9.57337 7.13682 9.74407 6.93245 9.74407C6.72808 9.74407 6.5586 9.57337 6.5586 9.36753V9.07635H6.37915C5.56167 9.07635 4.89871 8.38353 4.89871 7.53006C4.89871 7.32423 5.06819 7.15353 5.27256 7.15353C5.47693 7.15353 5.64641 7.32423 5.64641 7.53006C5.64641 7.96684 5.97539 8.32329 6.37915 8.32329H6.5586V6.62639L5.80592 6.35529C5.41711 6.21974 4.89372 5.92855 4.89372 5.0299C4.89372 4.25676 5.49687 3.63423 6.2346 3.63423H6.5586V3.34304C6.5586 3.13721 6.72808 2.96651 6.93245 2.96651C7.13682 2.96651 7.3063 3.13721 7.3063 3.34304V3.63423H7.48575C8.30323 3.63423 8.96619 4.32704 8.96619 5.18051C8.96619 5.38635 8.79671 5.55704 8.59234 5.55704C8.38797 5.55704 8.21849 5.38635 8.21849 5.18051C8.21849 4.74374 7.8895 4.38729 7.48575 4.38729H7.3063V6.08419L8.05898 6.35529Z"
                    fill="#4886F8"
                  />
                  <path
                    d="M5.646 5.03484C5.646 5.47162 5.80052 5.55696 6.05474 5.64733L6.55819 5.82304V4.38721H6.23419C5.91018 4.38721 5.646 4.67839 5.646 5.03484Z"
                    fill="#4886F8"
                  />
                </svg>
                <p className="text-[0.84rem] pl-1">Mínimo de inversión</p>
              </div>
              <h6 className="text-primaryBlue">U$S {minimoInversion}</h6>
            </div>
          </div>
          <div className="pb-4">
            <p className="font-bold text-primaryBlue text-[1rem] pb-2 text-left">
              Capital fondeado
            </p>
            <div className="bg-primaryLightBlue rounded-full w-full">
            <div className={`bg-primaryBlue pt-3 rounded-full`} style={{ width: `${porcentaje}%`}}></div>
            </div>
            <div className="flex justify-between text-[0.8rem] pt-1">
              <p>
                U$S {totalInvertido} /{" "}
                <b className="text-primaryBlue">{inversionMax}</b>
              </p>
              <p>{porcentaje} de financiamiento alcanzado</p>
            </div>
          </div>
          <a
            href={
              "https://wa.me/5491124098869?text=Estoy interesado en invertir en esta propiedad"
            }
            target="_blank"
          >
            {" "}
            <button className="bg-primaryBlue text-white w-full rounded-xl py-[0.6rem] text-[1rem]">
              QUIERO INVERTIR
            </button>
          </a>
        </div>
      )}
      {type == "admin_card" && (
        <div className="flex flex-col p-3">
          <div className="flex flex-row justify-between pl-[3.5%] h-12 items-center ">
            <div className="text-[1.2rem] font-medium">Tenencia</div>
            {cardState == "default" && (
              <div className="flex flex-row pr-[4%] items-end">
                <p className="font-bold text-[1.5rem] text-primaryBlue">1000</p>
                <p>/</p>
                <p>12m2</p>
              </div>
            )}
            {cardState == "edit" && (
              <div id="search" className="h-auto pr-3.5 w-[50%]">
                <InputForm height={1.5} placeholder={cardOperation}/>
              </div>
            )}
          </div>
          {cardState == "default" && (
            <div
              id="buttons"
              className="flex flex-row justify-evenly cursor-default"
            >
              <button
                className="lg:w-[45%] w-[40%] bg-white text-primaryBlue py-1.5 font-[500] rounded-md border border-primaryBlue text-[1.2rem] xl:text-[clamp(1.2rem,1.5vw,1.5rem)] mt-2 text-center w-[100%]"
                onClick={() => handleCardOperation("Deducir")}
              >
                Deducir
              </button>
              <button
                className="lg:w-[45%] w-[40%] bg-primaryBlue text-white py-1.5 font-[500] rounded-md border border-white text-[1.2rem] xl:text-[clamp(1.2rem,1.5vw,1.5rem)] mt-2 text-center w-[100%]"
                onClick={() => handleCardOperation("Incrementar")}
              >
                Incrementar
              </button>
            </div>
          )}
          {cardState == "edit" && (
            <div
              id="buttons"
              className="flex flex-row justify-evenly cursor-default	"
            >
              <button
                className="lg:w-[45%] w-[40%] bg-white text-primaryBlue py-1.5 font-[500] rounded-md border border-primaryBlue text-[1.2rem] xl:text-[clamp(1.2rem,1.5vw,1.5rem)] mt-2 text-center w-[100%]"
                onClick={() => handleCardOperation("cancel")}
              >
                Cancelar
              </button>
              <button
                className="lg:w-[45%] w-[40%] bg-primaryBlue text-white py-1.5 font-[500] rounded-md border border-white text-[1.2rem] xl:text-[clamp(1.2rem,1.5vw,1.5rem)] mt-2 text-center w-[100%]"
                onClick={() => handleCardOperation("confirm")}
              >
                Confirmar
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
