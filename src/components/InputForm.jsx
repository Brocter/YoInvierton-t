import React, { useEffect } from "react";

const InputForm = (props) => {
  let { title, placeholder, name, onChange, type, height } = props;

  return (
    <div className="w-full">
      <label className="block pl-2">{title}</label>
      <input
        className={`shadow appearance-none border rounded-md w-full py-${height} px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline}`}
        type={type}
        name={name}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputForm;
