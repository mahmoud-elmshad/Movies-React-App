const INITIAL_STATE = {
  fav: false,
};

export default function favoritereducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        fav: action.payload,
      };
    default:
      return state;
  }
}
