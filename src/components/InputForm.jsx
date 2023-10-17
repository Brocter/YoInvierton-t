import React from "react";

const InputForm = (props) => {

    const {title, placeholder, name, onChange, type} = props;

    return(
        <div>
        <label className="block pl-2">{title}</label>
        <input className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={type} name={name} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}

export default InputForm