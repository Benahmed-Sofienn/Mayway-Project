import {
  CURRENT_USER,
  LOGOUT,
  USER_FAIL,
  USER_LOAD,
  USER_SUCC,
  ADD_USER_FAIL,
  DELETE_USER_FAIL,
  EDIT_USER_FAIL,
  GET_USERS_FAIL,
  GET_USERS_LOAD,
  GET_USERS_SUCC,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  GET_USER_SUCC,
  GET_USER_LOAD,
  GET_USER_FAIL,
  BANN_USER_FAIL,
  UNBANN_USER_FAIL,
  GET_BANNED_USERS_SUCC,
  GET_BANNED_USERS_FAIL,
} from "../actionsType/user";

const initState = {
  user: {},
  load: false,
  isAuth: false,
  usersList: [],
  blackList: [],
  errors: ["1","2"],
  edit: false,
};

const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_LOAD:
      return { ...state, load: true };
    case USER_SUCC:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("email", payload.user.email);

      return { ...state, load: false, user: payload.user, isAuth: true };
    case USER_FAIL:
      return { ...state, load: false, errors: payload.errors, isAuth: false };
    case CURRENT_USER:
      return { ...state, user: payload, load: false, isAuth: true };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("email");

      
      return { ...state, user: {}, load: false, errors: [], isAuth: false };

    case GET_USERS_LOAD:
      return { ...state, load: true };
    case GET_USERS_SUCC:
      return { ...state, load: false, usersList: payload };
    case GET_USERS_FAIL:
      return { ...state, load: false, errors: payload };

    case DELETE_USER_FAIL:
      return { ...state, errors: payload };

    case ADD_USER_FAIL:
      return { ...state, errors: payload };

    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };

    case GET_USER_LOAD:
      return { ...state, load: true };
    case GET_USER_SUCC:
      return { ...state, load: false, user: payload };
    case GET_USER_FAIL:
      return { ...state, load: false, errors: payload };

    case EDIT_USER_FAIL:
      return { ...state, load: false, errors: payload };

      case GET_BANNED_USERS_SUCC:
        return { ...state, load: false, blackList: payload };
      case GET_BANNED_USERS_FAIL:
        return { ...state, load: false, errors: payload };

        case UNBANN_USER_FAIL:
          return { ...state, errors: payload };
    
        case BANN_USER_FAIL:
          return { ...state, errors: payload };

    default:
      return state;
  }
};

export default userReducer;
