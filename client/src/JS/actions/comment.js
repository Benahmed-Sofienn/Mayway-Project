import axios from "axios";
import {
  GET_COMMENTS_SUCC,
  GET_COMMENTS_FAIL,
  GET_COMMENTS_LOAD,
  DELETE_COMMENT_FAIL,
  ADD_COMMENT_FAIL,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  GET_COMMENT_LOAD,
  GET_COMMENT_SUCC,
  GET_COMMENT_FAIL,
  EDIT_COMMENT_SUCC,
  EDIT_COMMENT_FAIL,
} from "../actionsType/comment";

// get all comments
export const getComments = () => async (dispatch) => {
  dispatch({ type: GET_COMMENTS_LOAD });
  try {
    let result = await axios.get("/api/comments");

    dispatch({ type: GET_COMMENTS_SUCC, payload: result.data.commentsList });
  } catch (error) {
    dispatch({ type: GET_COMMENTS_FAIL, payload: error.response.data });
  }
};

//delete comment
export const deleteComment = (commentId) => async (dispatch) => {
  try {
    await axios.delete(`/api/comments/${commentId}`);
    dispatch(getComments());
  } catch (error) {
    dispatch({ type: DELETE_COMMENT_FAIL, payload: error.response.data });
  }
};

// add new comment

export const addComment = (newComment) => async (dispatch) => {
  try {
    await axios.post("/api/comments", newComment);
    dispatch(getComments());
  } catch (error) {
    dispatch({ type: ADD_COMMENT_FAIL, payload: error.response.data });
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

//get comment
export const getComment = (commentId) => async (dispatch) => {
  dispatch({ type: GET_COMMENT_LOAD });
  try {
    let result = await axios.get(`/api/comments/${commentId}`);
    dispatch({
      type: GET_COMMENT_SUCC,
      payload: result.data.commentToFind,
    });
  } catch (error) {
    dispatch({ type: GET_COMMENT_FAIL, payload: error.response.data });
  }
};

//edit comment
export const editComment = (commentId, comment) => async (dispatch) => {
  try {
    await axios.put(`/api/comments/${commentId}`, comment);
    dispatch({ type: EDIT_COMMENT_SUCC });
    dispatch(getComments());
  } catch (error) {
    dispatch({ type: EDIT_COMMENT_FAIL, payload: error.response.data });
  }
};
