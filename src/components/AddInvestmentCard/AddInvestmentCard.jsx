import React, { useState, useEffect } from "react";
import InputForm from "../InputForm";
import Dropdown from "../Dropdown/Dropdown";
import {addInvestment} from "../../utils/firebase"

export const AddInvestmentCard = ({allInvestments, uid}) => {
  const [cardState, setcardState] = useState(false);
  const [dropdownList, setDropdownList] = useState([])
  const [newInvestment, setNewInvestment] = useState({investment: dropdownList[0]?.value, project: "Jardin Regazzoni"});

  const handleCardState = () => {
    if (cardState == false) {
      setcardState(true);
    } else {
      setcardState(false);
    }
  };

  useEffect(()=> {
    setNewInvestment((prevData) => ({
      ...prevData, 
      investment: dropdownList[0]?.value
    }));
  },[dropdownList])

  const handleInputChange = (data, field) => {
    setNewInvestment((prevData) => ({
      ...prevData, 
      [field]: data,
    }));
  }

  useEffect(()=> {
    let dropdownArr = []
    allInvestments && Object.values(allInvestments).forEach((investment)=> {
      const name = investment.piso + investment.unidad
      dropdownArr.push({
        value: name,
        text: name
      })
      })
      console.log("dropdownArr", dropdownArr);
      setDropdownList(dropdownArr)
  }, [allInvestments])

  //Where the fuck can I get the user id for? (the key in the object's database)
  const createInvestment = () => {
    console.log("USEEER ID", uid);
    addInvestment(uid,newInvestment)
    //newInvestment
    //uid
  }

  return (
    <div className="w-[100%] max-w-[35rem] h-[32rem] overflow-hidden border border-primaryLightBlue rounded-b-xl rounded-tr-[1.9rem] shadow-lg shadow-primaryLightBlue">
      {!cardState && <div onClick={handleCardState} onMouseEnter={handleCardState} className=" w-full h-full flex flex-col hover:border-0 justify-center items-center cursor-default text-primaryBlue">
        <p className="text-[4rem] text-center">+</p>
        <p className="text-[1.3rem] font-medium">Agregar Inversión</p>
      </div>}
      {cardState && <div className="flex flex-col w-[100%] h-full overflow-hidden justify-center items-center p-6" onMouseLeave={handleCardState}>
        <div className="lg:hidden flex flex-row items-start w-full mb-4 cursor-default">
          <div onClick={handleCardState} className="text-[1.1rem] font-medium text-gray-500 hover:text-primaryBlue">Regresar</div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Dropdown type="dropdown" options={dropdownList} handleInputChange={handleInputChange} parameter={"investment"}/>
          <div className="w-[60%] h-auto ml-5 flex justify-center items-center"><InputForm height={2} placeholder={"Investment"} onChange={(e) => handleInputChange(parseInt(e.target.value), "investmentAmount")}/></div>
        </div>
        <button onClick={() => createInvestment()} className='flex p-1 w-full h-[2.3rem] bg-primaryBlue justify-center items-center px-5 rounded-md text-white font-[500] text-5 mt-5'>Agregar Inversión</button>
      </div>}
    </div>
  );
};
