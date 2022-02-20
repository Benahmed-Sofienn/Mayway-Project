import React from "react";
import { useDispatch } from "react-redux";
import { bannUser, unbannUser } from "../../JS/actions/action";

import "./ClientCard.css";

const ClientCard = ({ user, blackList }) => {
  const dispatch = useDispatch();
  const isBanned = blackList.find((client) => client.email === user.email);
 
  return (
    <div className="contactCard">
      <div style={{ width: "18rem" }}>
        <div className="clientCardimg">

        <img src={user.imgLink} alt="userImg"  />
        </div>

        <div className="list-group-flush">
          <hr/>
          <h2>{user.name}</h2>
          <hr/>
          <h4>{user.email}</h4>
          <h3>{user.phone}</h3>
        </div>
        <div >
          {!isBanned ? (
            <button
            className="userCardBtn"
              variant="dark"
              onClick={() => dispatch(bannUser({email :user.email}))}
            >
              BANN{" "}
            </button>
          ) : (
            <button
            className="userCardBtn"
              variant="dark"
              onClick={() => dispatch(unbannUser(isBanned._id))}
            >
              UNBANN
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
