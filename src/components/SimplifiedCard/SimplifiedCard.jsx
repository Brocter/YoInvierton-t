import React, { useState, useEffect } from "react";
import {retrieveImage} from "../../utils/firebase";

const SimplifiedCard = ({piso, unidad, status, imgUrl}) => {

  const [image, setImage] = useState()
  //Bring Investment Image from Storage
  useEffect(()=> {
    console.log("soy una tarjeta uwu")
    retrieveImage(imgUrl).then((url)=> {
      console.log("download url", url)
      setImage(url)
    })
  }, [])

  return (
    <div className="border border-text-gray-900 w-full h-[10rem] rounded-sm p-3 bg-cover bg-center mt-5" style={{ backgroundImage: `url('${image}')`}}    >
     <h1 className="text-[1.5rem] font-bold text-white">{piso + unidad}</h1>
     <h2 className="text-[1rem] font-medium text-white">{status}</h2>
    </div>
  );
};

export default SimplifiedCard;
