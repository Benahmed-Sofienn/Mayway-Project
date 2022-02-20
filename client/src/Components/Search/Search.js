import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { Redirect, Route } from "react-router";
import { useHistory } from "react-router-dom";



import "./Search.css";

const Search = ({ setTrans, setSearch} ) => {
  const history = useHistory();
  const [number, setNumber] = useState("");
  const [type, setType] = useState("")

  const transportsList = useSelector(
    (state) => state.transportReducer.transportsList
  );


  const isAuth = useSelector(state => state.userReducer.isAuth)


const  redirect =()=> {
  if (!isAuth) {
     history.push('/login')
  }
}

  return (
    <div>
      <div className="card p-4 mt-3">
        <h3 className="heading mt-5 text-center">
          Hi! Choose transport type and search for it's number!
        </h3>
        <div className="d-flex justify-content-center px-5">
          <div className="search"
           onClick={redirect}>
            {" "}
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              name="number"
             
              onChange={(e) =>  setNumber(e.target.value) }
            />{" "}
            <div
              className="search-icon"
              onClick={() => {
                setTrans(
                  // dadadadad
                  transportsList.find(
                    (transport) => transport.number.toLowerCase() === number.toLowerCase() & transport.type === type
                  )
                );
                setSearch(true);
              }}
            >
              {" "}
              <i className="fa fa-search" 
              />{" "}
            </div>{" "}
          </div>
        </div>
        <div className="row mt-4 g-1 px-4 mb-5">
          <div className="col-md-2" onClick={()=>setType("Train")} >
            <div className="card-inner p-3 d-flex flex-column align-items-center">
              {" "}
              <i className="fas fa-subway"></i>
              <div className="text-center mg-text">
                {" "}
                <span className="mg-text">Train</span>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-2" onClick={()=>setType("Bus")}>
            <div className="card-inner p-3 d-flex flex-column align-items-center">
              {" "}
              <i className="fas fa-bus"></i>
              <div className="text-center mg-text">
                {" "}
                <span className="mg-text">Bus</span>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-2" onClick={()=>setType("Metro")}>
            <div className="card-inner p-3 d-flex flex-column align-items-center">
              {" "}
              <i className="fas fa-train"></i>
              <div className="text-center mg-text">
                {" "}
                <span className="mg-text">Metro</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
