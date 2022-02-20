import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Footer from "./Components/Footer/Footer";
import Errors from "./Pages/Errors/Errors";
import LandPage from "./Pages/LandPage/LandPage";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Admin from "./Pages/Admin/Admin";
import Main from "./Pages/Main/Main";
import PrivateRoute from "./router/PrivateRoute";
import TransportList from "./Pages/TransportsList/TransportList";
import AddEditeTransport from "./Pages/AddEditeTransport/AddEditeTransport";
import Clients from "./Pages/Clients/Clients";

import { currentUser } from "./JS/actions/action";



import "./App.css";
import { getTransports } from "./JS/actions/transport";



function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(currentUser());
    dispatch(getTransports())
  }, [dispatch]);
  
 
 
  return (
    <div className="App">
     
     
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/track" component={Main} />
        <Route path="/addTransport" component={AddEditeTransport} />
        <Route path="/editeTransport" component={AddEditeTransport} />

        <PrivateRoute path="/clients" component={Clients}  />
        
        <PrivateRoute path="/transports" component={TransportList} />

        <Route path="/*" component={Errors} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
