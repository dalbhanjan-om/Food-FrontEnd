import { isPresentInFavourites } from "../../config/logic";
import {
    ADD_TO_FAVOURITES_FAILURE,
  ADD_TO_FAVOURITES_REQUEST,
  ADD_TO_FAVOURITES_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
 
} from "./ActionType";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
  favorites: [],
  success: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case ADD_TO_FAVOURITES_REQUEST:
      return { ...state, isLoading: true, error: null, success: null };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jwt: action.payload,
        error: null,
        success: "Sucess",
      };


    case GET_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          user: action.payload,
          favourites:action.payload.favorites
         
       
        };

    case ADD_TO_FAVOURITES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        favorites: isPresentInFavourites(state.favorites, action.payload)
          ? state.favorites.filter((item) => item.id !== action.payload.id)
          : [action.payload, ...state.favorites],
        error: null,
        success: "Added to favourites",
      };
    
    case LOGOUT:
      return initialState;
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
    case ADD_TO_FAVOURITES_FAILURE:
          return { ...state, isLoading: false, error: action.payload, success: null };

      default:
        return state;
  }
};
