import { LOGIN, LOGOUT } from "./actions";

const authInitialState = {
    loginState: null,
  };

export const authReducer=(state=authInitialState,action:any)=>{
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          loginState: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          loginState: null,
        };
      default:
        return state;
    }
  }