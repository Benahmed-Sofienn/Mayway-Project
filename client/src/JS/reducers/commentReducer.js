import {
  ADD_COMMENT_FAIL,
  DELETE_COMMENT_FAIL,
  GET_COMMENTS_FAIL,
  GET_COMMENTS_LOAD,
  GET_COMMENTS_SUCC,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  GET_COMMENT_SUCC,
  GET_COMMENT_LOAD,
  GET_COMMENT_FAIL,
} from "../actionsType/comment";

const initState = {
  commentsList: [],
  load: false,
  errors: [],
  edit: false,
  comment: [],
};

export const commentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_COMMENTS_LOAD:
      return { ...state, load: true };
    case GET_COMMENTS_SUCC:
      return { ...state, load: false, commentsList: payload };
    case GET_COMMENTS_FAIL:
      return { ...state, load: false, errors: payload };

    case DELETE_COMMENT_FAIL:
      return { ...state, errors: payload };

    case ADD_COMMENT_FAIL:
      return { ...state, errors: payload };

    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };

    case GET_COMMENT_LOAD:
      return { ...state, load: true };
    case GET_COMMENT_SUCC:
      return { ...state, load: false, comment: payload };
    case GET_COMMENT_FAIL:
      return { ...state, load: false, errors: payload };

   

    default:
      return state;
  }
};

export default commentReducer;
