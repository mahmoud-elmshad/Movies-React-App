import { combineReducers } from "redux";
import favoritereducer from "./favorite";
import addfavoritereducer from "./addfavorite";
import moviesreducer from "./moviesthunk";

export default combineReducers({
  favorite: favoritereducer,
  addfavorite: addfavoritereducer,
  movies: moviesreducer,
});
