export default function changefavorite(data) {
  return {
    type: "SET_FAVORITE",
    payload: data,
  };
}
