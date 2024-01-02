import arrowDown from "../../assets/icons/arrow_down.png";
import React, { useState, useEffect } from "react";
import { AddInvestmentCard } from "../AddInvestmentCard/AddInvestmentCard";
import { OportunidadesCard } from "../OportunidadesCard/OportunidadesCard";

const UserCard = ({handleCardSelected,user,index,cardSelected,allInvestments,uid}) => {
  const [cardState, setcardState] = useState("closed");
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    if (index != cardSelected) {
      setcardState("closed");
    }
  }, [cardSelected]);

  const handleClick = (e) => {
    handleCardSelected(index);
    if (cardState == "closed") {
      setcardState("open");
      handleCardSelected(index);
    } else {
      setcardState("closed");
      handleCardSelected("none");
    }
  };

  return (
    <div className="flex-col">
      <div
        className="flex flex-row w-full h-auto border-b border-100-gray p-4 pl-0 justify-between items-center"
        onClick={handleClick}
      >
        <div>
          <div>
            <p className="text-[1.3rem] text-primaryBlue font-bold">
              {userData?.fullName}
            </p>
            <p>DNI: {userData["DNI"]}</p>
          </div>

          <div className="mt-2">
            <p>{userData["portfolioValue"]} USD</p>
          </div>
        </div>
        <div>
          <div
            className={`ml-[-2rem] mt-[0.4rem] ${
              cardState == "open" ? "rotate-90" : ""
            }`}
          >
            <img src={arrowDown} width="50rem" alt="Arrow Down" />
          </div>
        </div>
      </div>
      {cardState == "open" && (
        <div
          id="list"
          className="grid md:grid-cols-2 lg:grid-cols-3 w-[100%] xl:grid-cols-4 p-8 gap-4 content-center"
        >
          <AddInvestmentCard allInvestments={allInvestments} uid={uid} userData={user} />

          {user["investments"] && Object.keys(user["investments"]).map((key) => (
            <OportunidadesCard
              mode={"admin_card"}
              InvestmentData={allInvestments[key]}
              userStake={user["investments"][key]} 
              uid = {uid}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserCard;
