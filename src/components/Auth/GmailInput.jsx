import React from "react"
import InputForm from "../InputForm";


export const GmailInput = (props) => {
    const { handleInput } = props;
    
    return(
        <>
            <InputForm type={"email"} title={"Email"} name={"email"} onChange={handleInput} placeholder={"ejemplo@gmail.com"}/>
        </>
    )
}