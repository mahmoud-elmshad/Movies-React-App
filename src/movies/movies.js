import React from "react";
import { useEffect, useState } from "react";

import Moviecard from "./moviecard";
import axiosinstance from "./../axios/axios";
import { Link } from "react-router-dom";

import Paginationi from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import changemovies from "../store/actions/moviesthunk";

export default function Movies() {
  const [movies, setmovies] = useState([]);
  const [currPage, setCurrPage] = React.useState(1);

  const dispatch = useDispatch();
  const moviesthunk = useSelector((state) => state.movies);

  // useEffect(() => {
  //   axiosinstance
  //     .get("popular", { params: { page: "2" } })
  //     .then((x) => {
  //       console.log(x.data.results);
  //       setmovies(x.data.results);
  //       console.log(movies);
  //     })
  //     .catch((y) => {
  //       console.log(y);
  //     });
  // }, []);

  React.useEffect(() => {
    // afterPageClicked(1);
    dispatch(changemovies());
  }, []);

  // const afterPageClicked = (page_number) => {
  //   console.log(page_number);
  //   setCurrPage(page_number);
  //   console.log(currPage);
  //   axiosinstance
  //     .get("popular", { params: { page: `${page_number}` } })
  //     .then((x) => {
  //       console.log(x.data.results);
  //       setmovies(x.data.results);
  //       console.log(movies);
  //     })
  //     .catch((y) => {
  //       console.log(y);
  //     });
  // };

  return (
    <>
      <div></div>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {moviesthunk.map((x) => {
          return (
            <>
              {/* <Link to={`/movies/details/${x.id}`} key={x.id} className=""> */}
              {/* <li>{x.title}</li> */}
              <div
                key={x.id}
                className="d-flex flex-column"
                style={{ maxWidth: "22.5%", minWidth: "250px" }}
              >
                <Moviecard
                  movies={moviesthunk}
                  id={x.id}
                  movie={x.title}
                  overview={x.overview}
                  img={`https://image.tmdb.org/t/p/w500/${x.poster_path}`}
                />
                <div className="mx-auto mt-auto">
                  <Link to={`/movies/details/${x.id}`} key={x.id} className="">
                    <button>Details</button>
                  </Link>
                </div>
              </div>
              {/* </Link> */}
            </>
          );
        })}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Paginationi
          totPages={25}
          currentPage={currPage}
          pageClicked={(ele) => {
            // afterPageClicked(ele);
          }}
        />
      </div>

      {/* <Moviecard /> */}
    </>
  );
}
