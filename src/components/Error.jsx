import React from "react";

const Error = ({message}) => {
  return (
    <div className="error">
      <p>A problem occurred. Flights info could not taken</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
