import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";
import UpdateImg from "../../Components/UpdateImg/UpdateImg";
import { editUser } from "../../JS/actions/action";

import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);
  // const load = useSelector(state => state.useReducer.load);

  const [newUser, setNewUser] = useState({
    adresse: "",
    lastName: "",
    number: "",
    age: "",
    sexe: "",
    country: "",
    state: "",
    imgLink: "https://i.stack.imgur.com/YaL3s.jpg",
    ...user,
  });
  const [change, setChange] = useState(false);
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState(true);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  setTimeout(() => {
    info &&
      setNewUser({
        adresse: "",
        lastName: "",
        number: "",
        age: "",
        sexe: "",
        country: "",
        state: "",
        imgLink: "https://i.stack.imgur.com/YaL3s.jpg",

        ...user,
      });
  }, 1900);

  setTimeout(() => {
    setInfo(false);
  }, 3000);

  return (
    <div>
      <NavBar />
      <div className="ProfilePage">
        {show && (
          <UpdateImg
            newUser={newUser}
            setNewUser={setNewUser}
            setShow={setShow}
            setChange={setChange}
          />
        )}
        <div className="fixed">
          <div className="ImgDiv">
            <img
              className="ImgProfil"
              src={newUser.imgLink}
              alt="Profile avatar"
              onClick={() => setShow(true)}
            />
          </div>
          <h4>{newUser.email}</h4>
        </div>
        <hr style={{ height: "100vh" }} />
        <div className="varible">
          <div className="fullName">
            <div>
              <h4>First name</h4>
              <input
                value={newUser.name}
                placeholder="Enter your first name ..."
                name="name"
                className="profileInput"
                onChange={(e) => {
                  setChange(true);
                  handleChange(e);
                }}
              ></input>
            </div>
            <div>
              <h4>Last name</h4>
              <input
                value={newUser.lastName}
                placeholder="Enter your last name ..."
                name="lastName"
                className="profileInput"
                onChange={(e) => {
                  setChange(true);
                  handleChange(e);
                }}
              ></input>
            </div>
          </div>

          <div>
            <h4>Phone number</h4>
            <input
              value={newUser.number}
              placeholder="Enter your number ..."
              name="number"
              className="profileInput"
              onChange={(e) => {
                setChange(true);
                handleChange(e);
              }}
            ></input>
          </div>
          <div>
            <h4>Age</h4>
            <input
              value={newUser.age}
              placeholder="Enter your age ..."
              name="age"
              className="profileInput"
              onChange={(e) => {
                setChange(true);
                handleChange(e);
              }}
            ></input>
          </div>
          <div>
            <h4>Sexe</h4>
            <input
              value={newUser.sexe}
              placeholder="Enter your sexe ..."
              name="sexe"
              className="profileInput"
              onChange={(e) => {
                setChange(true);
                handleChange(e);
              }}
            ></input>
          </div>
          <div>
            <h4>Adresse</h4>
            <input
              value={newUser.adresse}
              placeholder="Enter your adresse ..."
              name="adresse"
              className="profileInput adresseInput"
              onChange={(e) => {
                setChange(true);
                handleChange(e);
              }}
            ></input>
          </div>
          <div className="adresse">
            <div>
              <h4>Country</h4>
              <input
                value={newUser.country}
                placeholder="Enter your country ..."
                name="country"
                className="profileInput"
                onChange={(e) => {
                  setChange(true);
                  handleChange(e);
                }}
              ></input>
            </div>
            <div>
              <h4>State/Region</h4>
              <input
                value={newUser.state}
                placeholder="Enter your state or region ..."
                name="state"
                className="profileInput"
                onChange={(e) => {
                  setChange(true);
                  handleChange(e);
                }}
              ></input>
            </div>
          </div>

          {change && (
            <button
              className="changeProfileBtn"
              onClick={() => dispatch(editUser(user._id, newUser))}
            >
              Save Change
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
