import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteTransport,
  getTransport,
  toggleTrue,
} from "../../JS/actions/transport";
// import userImg from "../../assets/Img/userImg.jpg";
import "./TransportCard.css";

const TransportCard = ({ transport }) => {
  const dispatch = useDispatch();

  return (
    <div className="transportCard">
      <div className="transportInfo">
        <h2>Type : {transport.type}</h2>
        <h4>Number : {transport.number}</h4>
        <div style={{ width: "650px" }}>
          Stops :{" "}
          {transport.stops.map((stop) => (
            <span>{stop}, </span>
          ))}
        </div>
        <hr  style={{width:"100%"}} />
        <div style={{ width: "650px" }}>
          Times :{" "}
          {transport.times.map((time) => (
            <span>{time}, </span>
          ))}
        </div>
      </div>
      <hr />
      <div className="addEditeIcon">
        <Link to={`/editeTransport/${transport._id}`}>
          <i
            className="fas fa-edit"
            onClick={() => {
              dispatch(getTransport(transport._id));
              dispatch(toggleTrue());
            }}
          ></i>
        </Link>

        <i
          className="fas fa-trash-alt"
          onClick={() => dispatch(deleteTransport(transport._id))}
        ></i>
      </div>
    </div>
  );
};

export default TransportCard;
