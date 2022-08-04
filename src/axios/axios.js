import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  // headers:{
  // },
  params: {
    api_key: "43fb0460a8cc73f3e2e8df00944f7554",
  },
});
export default axiosinstance;
