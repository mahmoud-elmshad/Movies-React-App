const INITIAL_STATE = {
  favlist: [],
};

export default function addfavoritereducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        // favlist: state.favlist.push(action.payload),
        favlist: action.payload,
      };
    default:
      return state;
  }
}
