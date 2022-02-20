import axios from "axios";
import {
  USER_FAIL,
  USER_LOAD,
  USER_SUCC,
  CURRENT_USER,
  LOGOUT,
  GET_USERS_SUCC,
  GET_USERS_FAIL,
  GET_USERS_LOAD,
  DELETE_USER_FAIL,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  GET_USER_LOAD,
  GET_USER_SUCC,
  GET_USER_FAIL,
  EDIT_USER_SUCC,
  EDIT_USER_FAIL,

  BANN_USER_FAIL,
  UNBANN_USER_FAIL,
  GET_BANNED_USERS_SUCC,
  GET_BANNED_USERS_FAIL,
} from "../actionsType/user";

// register
export const register = (newUser, history) => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    const result = await axios.post("/api/user/register", newUser);
    dispatch({ type: USER_SUCC, payload: result.data }); //{msg, user , token}
    history.push("/profile");    
  } catch (error) {
      const errors = error.response.data.errors  
    dispatch({ type: USER_FAIL, payload: {errors} }); //{errors: []} //
  }
};

// login
export const login = (user, history) => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    const result = await axios.post("/api/user/login", user);
    dispatch({ type: USER_SUCC, payload: result.data }); //{msg, user , token}
    user.email === "admin@mayway.tn"
      ? history.push("/transports")
      : history.push("/profile");
  } catch (error) {
    dispatch({ type: USER_FAIL, payload: error.response.data }); //{errors: []}
  }
};

// Current user

export const currentUser = () => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data }); //{user}
  } catch (error) {
    const token = localStorage.getItem("token");
    token &&  dispatch({ type: USER_FAIL, payload: error.response.data }); //{errors: []}
  }
};

// logout
export const logout = () => {

  return { type: LOGOUT };
};

//DADADA


// get all clients
export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_LOAD });
  try {
    let result = await axios.get("/api/user");
    
    dispatch({ type: GET_USERS_SUCC, payload: result.data.usersList });
  } catch (error) {
    dispatch({ type: GET_USERS_FAIL, payload: error.response.data });
  }
};

//delete client
export const deleteUser = (userId) => async (dispatch) => {
  
  try {
    await axios.delete(`/api/user/${userId}`);
    
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: DELETE_USER_FAIL, payload: error.response.data });
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

//get client
export const getUser = (userId) => async (dispatch) => {
  dispatch({ type: GET_USER_LOAD });
  try {
    let result = await axios.get(`/api/user/${userId}`);
    dispatch({
      type: GET_USER_SUCC,
      payload: result.data.userToFind,
    });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error.response.data });
  }
};

//edit client
export const editUser = (userId, newUser) => async (dispatch) => {

  try {
    await axios.put(`/api/user/${userId}`, newUser);
    dispatch({ type: EDIT_USER_SUCC });
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: EDIT_USER_FAIL, payload: error.response.data });
  }
};


// get all banned clients
export const getBannedUsers = () => async (dispatch) => {
 
  try {
    let result = await axios.get("/api/bann");
    
    dispatch({ type: GET_BANNED_USERS_SUCC, payload: result.data.blackList });
  } catch (error) {
    dispatch({ type: GET_BANNED_USERS_FAIL, payload: error.response.data });
  }
};

//unbann client
export const unbannUser = (userId) => async (dispatch) => {

  try {
    await axios.delete(`/api/bann/${userId}`);
    
    dispatch(getBannedUsers());
  } catch (error) {
    dispatch({ type: UNBANN_USER_FAIL, payload: error.response.data });
  }
};

// bann user

export const bannUser = (client) => async (dispatch) => {
  
  try {
    
    await axios.post("/api/bann", client);
    
    dispatch(getBannedUsers());
  } catch (error) {
    dispatch({ type: BANN_USER_FAIL, payload: error.response.data });
  }
};
