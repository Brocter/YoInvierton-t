import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserData } from "../utils/firebase";

const Home = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        //check if user is already logged. 
        if (user != null){
            console.log(user);
            getUserData(user.uid).then((data) => {
                console.log("user data", data);
            });
        } else{
            //Otherwise return to Landing Page
            navigate("/");
        }

        //Retrieve user-associated data from filestorage

    }, []);

    return(
        <h2 className="text-[8rem] text-black">Home</h2>
    )
}

export default Home