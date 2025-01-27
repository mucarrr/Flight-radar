import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);
  return (
    <header>
      <Link to="/" className="logo">
        <img src="/logo.webp" alt="logo" width={40} />
        <h4>FLIGHT RADAR</h4>
      </Link>
      <div className="buttons">
        <NavLink to="/">
          <button>MAP</button>
        </NavLink>
        <NavLink to="/list">
          <button>LIST</button>
        </NavLink>
      </div>
      <h3>
        {isLoading
          ? "Flights loading"
          : error
          ? error
          : `${flights.length} flights found`}
      </h3>
    </header>
  );
};

export default Header;
