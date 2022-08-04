import axiosinstance from "../../axios/axios";

export default function changemovies(page_number) {
  return (dispatch) => {
    return axiosinstance
      .get("popular", { params: { page: `${page_number}` } })
      .then((x) => {
        console.log(x.data.results);
        //  setmovies(x.data.results);
        //  console.log(movies);
        dispatch({ type: "SET_MOVIES", payload: x.data.results });
      })
      .catch((y) => {
        console.log(y);
      });
  };
}
