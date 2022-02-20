import React, { useState } from "react";
import { useSelector } from "react-redux";

import TransportCard from "../../Components/TransportCard/TransportCard";
import SearchAddTransport from "../../Components/SearchAddTransport/SearchAddTransport";

import "./TransportList.css";
import NavBar from "../../Components/NavBar/NavBar";

const TransportList = () => {
  const transportsList = useSelector(
    (state) => state.transportReducer.transportsList
  );
  const load = useSelector((state) => state.transportReducer.load);
  const [number, setNumber] = useState("");

  return (
    <div>
      <NavBar/>
  
    <div className="transportPage">
      <SearchAddTransport setNumber={setNumber} />
      <div className="transportList">
        {load && <h1>waiiiit</h1>}
        {transportsList
          .filter((transport) => transport.number.includes(number))
          .map((transport) => (
            <TransportCard transport={transport} key={transport._id} />
          ))}
      </div>
    </div>
    </div>
  );
};

export default TransportList;
