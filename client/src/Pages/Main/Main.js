import React, { useState } from "react";

import Comment from "../../Components/Comment/Comment";
import GoogleMap from "../../Components/GoogleMap/GoogleMap";
import Search from "../../Components/Search/Search";

import { Bus, Metro, Train } from "../../assets/Data/placesData";

import "./Main.css";
import Infobox from "../../Components/InfoBox/Infobox";
import NavBar from "../../Components/NavBar/NavBar";

const Main = () => {
  const [trans, setTrans] = useState({});
  const [search, setSearch] = useState(false)
  const Stops = trans ? trans.stops : [];
  const Type = trans ? trans.type : "";
  let arr = [];
  let icon = ""

  function convertBus(stop) {
    let index = Bus.indexOf(stop);
    if (index !== -1) {
      arr.push(Bus[index + 1]);
    }
  }
  function convertMetro(stop) {
    let index = Metro.indexOf(stop);
    if (index !== -1) {
      arr.push(Metro[index + 1]);
    }
  }
  function convertTrain(stop) {
    let index = Train.indexOf(stop);
    if (index !== -1) {
      arr.push(Train[index + 1]);
    }
  }

  switch (Type) {
    case "Bus":
      Stops.map((stop) => convertBus(stop));
      icon = "https://i.postimg.cc/9fRbmwQW/BusIcon.png"

      break;
    case "Metro":
      Stops.map((stop) => convertMetro(stop));
      icon = "https://i.postimg.cc/g2rQhJ27/Metro-Icon.png"

      break;
    case "Train":
      Stops.map((stop) => convertTrain(stop));
      icon = "https://i.postimg.cc/x1MjwYwc/Train-Icon.png"

      break;

    default:
      arr = [{ lat: 36.806496, lng: 10.181532 }];
      break;
  }

  
  
  return (
    <div>
      <NavBar/>
   
    <div className="MainPAGE">
    

      <Search setTrans={setTrans} setSearch={setSearch} />
     { trans=== undefined? <h2>{`Cant find this transport line`}</h2> : search && <Infobox trans={trans}  Times={trans.times} />  }
      <div>
        <GoogleMap arr={arr} icon={icon} />
      </div>
     

     { trans !== undefined && search && <Comment   transId={trans._id} />}
     </div>
    </div>
  );
};

export default Main;
