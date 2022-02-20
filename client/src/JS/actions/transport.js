import axios from "axios";
import {
  GET_TRANSPORTS_SUCC,
  GET_TRANSPORTS_FAIL,
  GET_TRANSPORTS_LOAD,
  DELETE_TRANSPORT_FAIL,
  ADD_TRANSPORT_FAIL,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  GET_TRANSPORT_LOAD,
  GET_TRANSPORT_SUCC,
  GET_TRANSPORT_FAIL,
  EDIT_TRANSPORT_SUCC,
  EDIT_TRANSPORT_FAIL,
} from "../actionsType/transport";

// get all trnasports
export const getTransports = () => async (dispatch) => {
  dispatch({ type: GET_TRANSPORTS_LOAD });
  try {
    let result = await axios.get("/api/transports");
  
    dispatch({ type: GET_TRANSPORTS_SUCC, payload: result.data.transportsList });
  } catch (error) {
    dispatch({ type: GET_TRANSPORTS_FAIL, payload: error.response.data });
  }
};

//delete transport
export const deleteTransport = (transportId) => async (dispatch) => {
  
  try {
    await axios.delete(`/api/transports/${transportId}`);
   
    dispatch(getTransports());
  } catch (error) {
    dispatch({ type: DELETE_TRANSPORT_FAIL, payload: error.response.data });
  }
};

// add new transport

export const addTransport = ({transport , history}) => async (dispatch) => {
  try {
    
    await axios.post("/api/transports", transport);
    history.push("/transports")
    dispatch(getTransports());
  } catch (error) {
    dispatch({ type: ADD_TRANSPORT_FAIL, payload: error.response.data });
  }
};

//toggle true

export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};

export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};

//get transport
export const getTransport = (transportId) => async (dispatch) => {
  dispatch({ type: GET_TRANSPORT_LOAD });
  try {
    let result = await axios.get(`/api/transports/${transportId}`);
    dispatch({
      type: GET_TRANSPORT_SUCC,
      payload: result.data.transportToFind,
    });
  } catch (error) {
    dispatch({ type: GET_TRANSPORT_FAIL, payload: error.response.data });
  }
};

//edit transport
export const editTransport = (transportId, transport) => async (dispatch) => {
  try {
    await axios.put(`/api/transports/${transportId}`, transport);
    dispatch({ type: EDIT_TRANSPORT_SUCC });
    dispatch(getTransports());
  } catch (error) {
    dispatch({ type: EDIT_TRANSPORT_FAIL, payload: error.response.data });
  }
};
