import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../../JS/actions/action";

import "./NavBar.css";

const NavBar = ({landPage}) => {
  // const token = localStorage.getItem("token");
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const user = useSelector(state => state.userReducer.user)
  
  return (
    <nav className={landPage? "navbarLP" :"navbar"}>
      <ul className= {landPage? "NaveLP" :"Nave"}  >
        <li className= {landPage? "leftLP" :"left"} >
           <h2 style={{color:"#1161ee" , margin:"10% 0%"}}  >MayWay</h2>
        </li>
        <div className= {landPage? "rightLP" :"right"} >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/track">Track</a>
          </li>
           {user.email=== "admin@mayway.tn" && <li>
            <a href="/transports">Transports</a>
          </li>}
           { user.email=== "admin@mayway.tn" &&  <li>
            <a href="/clients">Clients</a>
          </li>}
          {isAuth ? user.email=== "admin@mayway.tn"? <li>
                      <a onClick={()=>dispatch( logout())}  href="/"  >Logout</a>
                    </li> :  (
            <li>
              <div className= {landPage? "dropdownLP" :"dropdown"} >
                
                  <button className= {landPage? "dropbtnLP" :"dropbtn"} >My account</button>
                
                <div className= {landPage? "dropdown-contentLP" :"dropdown-content"} >
                  <ul>
                    <li>
                      <a href="/profile">Profile</a>
                    </li>
                    <li>
                      <a onClick={()=>dispatch( logout())}  href="/"  >Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ) : (
            <li>
              <a href="/login">Login</a>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
