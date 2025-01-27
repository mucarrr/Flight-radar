import React from "react";
import nullCheck from "../../utils/nullCheck";

const Airport = ({ data }) => {
  return (
    <div className="airport">
      <div>
        <h2>{nullCheck(data?.origin?.code?.iata)}</h2>
        <h3>{nullCheck(data?.origin?.position?.region?.city)}</h3>
        <span>
          ({nullCheck(data?.origin?.timezone?.abbr)})(
          {nullCheck(data?.origin?.timezone?.name)})
        </span>
      </div>
      <div className="icon">
        <img src="/plane_icon.png" alt="plane" />
      </div>
      <div>
        <h2>{nullCheck(data?.destination?.code?.iata)}</h2>
        <h3>{nullCheck(data?.destination?.position?.region?.city)}</h3>
        <span>
          ({nullCheck(data?.destination?.timezone?.abbr)}) <br/>(
          {nullCheck(data?.destination?.timezone?.name)})
        </span>
      </div>
    </div>
  );
};

export default Airport;
