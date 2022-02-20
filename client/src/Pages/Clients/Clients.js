import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBannedUsers, getUsers } from "../../JS/actions/action";
import ClientCard from "../../Components/ClientCard/ClientCard";

import "./Clients.css"
import NavBar from "../../Components/NavBar/NavBar";

const Clients = () => {


    const usersList = useSelector(
        (state) => state.userReducer.usersList
      );
      const load = useSelector((state) => state.userReducer.load);
      const blackList = useSelector(state => state.userReducer.blackList)
    
      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(getUsers());
        dispatch(getBannedUsers());
      }, [dispatch]);
    

    return (
      <div>
        <NavBar/>
     
        <div className="clientsList">
      {load && <h1>waiiiit</h1>}
      {usersList.map((user) => user.email !== "admin@mayway.tn" && (
        <ClientCard user={user} key={user._id} blackList={blackList} />
      ))}
    </div>
    </div>
    )
}

export default Clients
