import {
  ADD_TRANSPORT_FAIL,
  DELETE_TRANSPORT_FAIL,
  GET_TRANSPORTS_FAIL,
  GET_TRANSPORTS_LOAD,
  GET_TRANSPORTS_SUCC,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  GET_TRANSPORT_SUCC,
  GET_TRANSPORT_LOAD,
  GET_TRANSPORT_FAIL,
} from "../actionsType/transport";

const initState = {
  transportsList: [],
  load: false,
  errors: [],
  edit: false,
  transport: [],
};

export const transportReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TRANSPORTS_LOAD:
      return { ...state, load: true };
    case GET_TRANSPORTS_SUCC:
      return { ...state, load: false, transportsList: payload };
    case GET_TRANSPORTS_FAIL:
      return { ...state, load: false, errors: payload };

    case DELETE_TRANSPORT_FAIL:
      return { ...state, errors: payload };

    case ADD_TRANSPORT_FAIL:
      return { ...state, errors: payload };

    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };

    case GET_TRANSPORT_LOAD:
      return { ...state, load: true };
    case GET_TRANSPORT_SUCC:
      return { ...state, load: false, transport: payload };
    case GET_TRANSPORT_FAIL:
      return { ...state, load: false, errors: payload };

    default:
      return state;
  }
};

export default transportReducer;
