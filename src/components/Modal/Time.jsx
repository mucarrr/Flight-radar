import React from "react";
import nullCheck from "../../utils/nullCheck";
import formatDate from "../../utils/formatDate";

const Time = ({ data }) => {
  return (
    <div className="time">
      <div>
        <span>Sched.:</span>
        <span>{nullCheck(formatDate(data?.scheduled?.departure))}</span>
      </div>
      <div>
        <span>Sched.:</span>
        <span>{nullCheck(formatDate(data?.scheduled?.arrival))}</span>
      </div>
      <div>
        <span>Real:</span>
        <span>{nullCheck(formatDate(data?.scheduled?.departure))}</span>
      </div>
      <div>
        <span>Estima.:</span>
        <span>{nullCheck(formatDate(data?.estimated?.arrival))}</span>
      </div>
    </div>
  );
};

export default Time;
