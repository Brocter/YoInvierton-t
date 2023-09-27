import React from "react"
import { useState } from "react";

export const AuthInputs = (props) => {
    const { handleInput } = props;
    
    return(
        <>
            <input type="email" name="email" onChange={handleInput} placeholder="ejemplo@gmail.com"/>
            <input type="password" name="password" onChange={handleInput} placeholder="Password"/>
        </>
    )
}