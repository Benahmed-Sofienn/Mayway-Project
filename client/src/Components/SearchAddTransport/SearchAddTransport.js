import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFalse } from "../../JS/actions/transport";

import "./SearchAddTransport.css";

const SearchAddTransport = ({ setNumber }) => {
  
  const dispatch = useDispatch();

  return (
    <div className="Query">
      <div className="search">
        {" "}
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          name
          onChange={(e) => setNumber(e.target.value)}
        />{" "}
        
      </div>
      <Link to="/addTransport">
        <button className="queryBtn" onClick={() => dispatch(toggleFalse)}>
          Add Transport
        </button>
      </Link>
    </div>
  );
};

export default SearchAddTransport;
