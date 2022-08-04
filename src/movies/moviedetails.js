import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosinstance from "./../axios/axios";
import Moviecard from "./moviecard";

export default function Moviedetails() {
  const params = useParams();

  const [movie, setmovie] = useState([]);

  useEffect(() => {
    axiosinstance
      .get(`${params.id}`)
      .then((x) => {
        console.log(x.data);
        setmovie(x.data);
        console.log(movie);
      })
      .catch((y) => {
        console.log(y);
      });
  }, []);
  return (
    <>
      <div className="w-25">
        <Moviecard
          movie={movie.title}
          overview={movie.overview}
          img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      </div>
    </>
  );
}
