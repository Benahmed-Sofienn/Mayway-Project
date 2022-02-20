import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTransport, editTransport } from "../../JS/actions/transport";
import { Link } from "react-router-dom";

import "./AddEditeTransport.css";
import NavBar from "../../Components/NavBar/NavBar";

const AddEditeTransport = ({ history }) => {
  const [transport, setTransport] = useState({
    type: "Bus",
    number: "",
    stops: [],
    times: [],
  });
  const edit = useSelector((state) => state.transportReducer.edit);

  const transportRed = useSelector((state) => state.transportReducer.transport);

  const dispatch = useDispatch();

  useEffect(() => {
    edit
      ? setTransport(transportRed)
      : setTransport({ type: "Bus", number: "", stops: [], times: [] });
  }, [edit, transportRed]);

  const handleChange = (e) => {
    setTransport({ ...transport, [e.target.name]: e.target.value.split(",") });
  };

  return (
    <div>
      <NavBar />

      <div className="addEdit">
        <>
          <select
            onChange={(e) =>
              setTransport({ ...transport, type: e.target.value })
            }
          >
            <option value="Bus">Bus</option>
            <option value="Metro">Metro</option>
            <option value="Train">Train</option>
          </select>
          <input
            placeholder="Enter transport number ..."
            name="number"
            value={transport.number}
            onChange={(e) =>
              setTransport({ ...transport, number: e.target.value })
            }
          ></input>

          <input
            placeholder="Enter transport stops ..."
            name="stops"
            value={transport.stops}
            onChange={handleChange}
          ></input>

          <input
            placeholder="Enter transport times ..."
            name="times"
            value={transport.times}
            onChange={handleChange}
          ></input>

          {edit ? (
            <Link to="/transports">
              <button
                onClick={() =>
                  dispatch(editTransport(transport._id, transport, history))
                }
              >
                edit
              </button>
            </Link>
          ) : (
            // <Link to="/transports">
            <button
              onClick={() => dispatch(addTransport({ transport, history }))}
            >
              add
            </button>
            // </Link>
          )}
        </>
      </div>
    </div>
  );
};

export default AddEditeTransport;
