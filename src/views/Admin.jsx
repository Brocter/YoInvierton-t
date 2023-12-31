import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../assets/edificioBackground.png";
import UserCard from "../components/UserCard/UserCard";
import InputForm from "../components/InputForm";
import { retrieveInvestments } from "../utils/firebase";
import Dropdown from "../components/Dropdown/Dropdown";
import { getAllUsers } from "../utils/firebase";

const Admin = () => {
  const navigate = useNavigate();
  const [allUserData, setAllUserData] = useState({});
  const [allUserArr, setAllUserArr] = useState([]);
  const [allUserArrPrint, setAllUserArrPrint] = useState([]);
  const [filterType, setFilterType] = useState("Alfabetico");
  const [searchProperty, setSearchProperty] = useState("Propiedades");
  const [cardSelected, setcardSelected] = useState("none");
  const [investmentObj, setInvestmentObj] = useState({})

  useEffect(() => {
    console.log("view init");
    //Get all users
    getAllUsers(setAllUserData)
    retrieveInvestments(setInvestmentObj);
    //Bring available investment options
  }, []);

  useEffect(() => {
    if (Object.keys(allUserData).length > 0) {

      //Converted the object into an array
      const userArr = Object.entries(allUserData)

      //Transform fullname into a single field and calculate total portfolio
      userArr.forEach((user)=>{
        user[1]["fullName"] = user[1]["fullName"]["name"] + " " + user[1]["fullName"]["surname"]
        user[1]["portfolioValue"] = calculatePortfolio(user)
      })

      setAllUserArrPrint(userArr)
      setAllUserArr(userArr)
      userFilterHandler(filterType, userArr); // Default sorting

    }
  }, [allUserData]);

  useEffect(() => {
    console.log("arr changed", allUserArr)
    // setAllUserArrPrint([...allUserArr])
  }, [allUserArr]);

  useEffect(() => {
    console.log("property selected", allUserArr);
  
    if (searchProperty === "Propiedades") {
      userFilterHandler(filterType, allUserArr);
    } else {
      let filteredUsers = [];
  
      allUserArrPrint.forEach((user) => {
        if (user[1]["investments"]) {
          Object.keys(user[1]["investments"]).forEach((inv) => {
            if (inv === searchProperty) {
              filteredUsers.push(user);
            }
          });
        }
      });
  
      setAllUserArrPrint(filteredUsers);
    }
  }, [searchProperty]);


  const calculatePortfolio = (userData) => {
    //Calculate Portfolio Value
    let portfolioValue = 0

    if (userData[1]["investments"]){
      Object.keys(userData[1]["investments"]).forEach((investment) => {
        portfolioValue += userData[1]["investments"][investment];
      })
    }

    return portfolioValue
  }

  const searchList = (data, arr) => {
    console.log("asdasdasdadasdasdas")
    console.log("filtering for...", data)

    if(data){
      let matchArr = []

      arr.forEach((user)=>{
        if(user[1]["fullName"].toLowerCase().includes(data.toLowerCase())){
          matchArr.push(user)
        }

        setAllUserArrPrint(matchArr)
      })

    } else {
      setAllUserArrPrint([...allUserArr])
      userFilterHandler(filterType, allUserArr)
    }
  }

  const dropdownData = ["Alfabetico","Antiguedad", "Inversion"]



  const handleCardSelected = (index) => {
    setcardSelected(index);
  };

  const userFilterHandler = (filterType, arr) => {

     let sortedUsers = []

     setFilterType(filterType)

    switch (filterType) {
      case "Antiguedad":
        sortedUsers = arr.sort((a, b) => a[1]["signupDate"] - b[1]["signupDate"]);
        break
      case "Alfabetico":
        //Turn names into a single string
        sortedUsers = arr.sort((a, b) => {
          return a[1]["fullName"].localeCompare(b[1]["fullName"]);
        });
        break;
      case "Inversion":
        sortedUsers = arr.sort((a, b) => b[1]["portfolioValue"] - a[1]["portfolioValue"] );
        console.log("asdasdasdas", sortedUsers)
        break;
    }

    setAllUserArrPrint([...sortedUsers])
  };
  


  return (
    <section id="main" className="flex flex-col p-8 px-[4rem] h-[100vh] w-full">
      <div
        id="title"
        className="font-bold text-[clamp(2.4rem,5vw,3.8rem)] text-primaryBlue"
      >
        Usuarios
      </div>
      <div className="flex flex-row justify-between">
        <div id="filter" className="flex flex-row mt-8">
          <div id="search" className="h-auto">
            <InputForm height={1.5} placeholder={"Buscar por nombre"} onChange={(e) => searchList(e.target.value, allUserArrPrint)} />
          </div>
          <div id="SortButton" className="ml-4">
            <Dropdown options={dropdownData} width={8} type={"filter"} parameter={"filter"}  onChange={(filterType) => userFilterHandler(filterType, allUserArrPrint)}/>
          </div>
         {investmentObj && <div id="SortButton" className="ml-4">
            <Dropdown options={["Propiedades", ...Object.keys(investmentObj)]} width={8} type={"dropdown"} parameter={"filter"} onChange={(propertyFilter) => setSearchProperty(propertyFilter)}/>
          </div>}
        </div>
        <div className="flex items-end">
        <Link to="/admin/cargar" preventScrollReset={true} >
          <button className='flex py-1.5 bg-primaryBlue justify-center items-center px-5 rounded-md text-white font-[500] text-5 mr-[1.5rem]'>Cargar Propiedades</button>
        </Link>
        </div>
      </div>
      <div id="userList" className="mt-8">
      {allUserArrPrint.map(([uid, user], index) => (
            <UserCard
              key={uid}
              uid={uid}
              user={user}
              index={index}
              handleCardSelected={handleCardSelected}
              cardSelected={cardSelected}
              allInvestments = {investmentObj}
            />
          ))}
      </div>
    </section>
  );
};

export default Admin;
