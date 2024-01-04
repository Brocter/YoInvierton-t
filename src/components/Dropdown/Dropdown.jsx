import { useEffect, useState } from "react";
import arrowDown from "../../assets/icons/arrow_down.png";
import filterIcon from "../../assets/icons/filter_icon.png";

const Dropdown = (props) => {
  const [config, setConfig] = useState({});

  useEffect(() => {
    switch (props.type) {
      case "dropdown":
        setConfig({
          icon: arrowDown,
          bg: "white",
          border: "primaryBlue",
          color: "primaryBlue",
          width: 11,
        });
        break;
      case "filter":
        setConfig({
          icon: filterIcon,
          bg: "primaryBlue",
          border: "white",
          color: "white",
          width: 8,
        });
        break;
    }
  }, [props]);

  return (
    <div
      id="filter"
      className={`flex flex-row min-w-[8rem] lg:w-[${config.width}rem] items-center`}
    >
      <select
        name="investment"
        id="investment"
        value={props.selected}
        className={`shadow appearance-none border rounded-md w-full py-1.5 border-${config.border} bg-${config.bg} text-${config.color} leading-tight focus:outline-none focus:shadow-outline p-2 pl-3 text-gray-500`}
        onChange={(e)=>props.onChange(e.target.value, props.parameter)}
      >
        {props.options.length > 0 && props.options.map((option, key) => (
          <option value={option} key={key}>{option}</option>
        ))}
      </select>
      <div className="ml-[-1.8rem] mt-[0.2rem]">
        <img src={config.icon} />
      </div>
    </div>
  );
};

export default Dropdown;
