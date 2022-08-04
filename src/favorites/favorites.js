import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Moviecard from "./../movies/moviecard";
import { Link } from "react-router-dom";

export default function Favorites() {
  const favoritelist = useSelector((state) => state.addfavorite.favlist);
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {favoritelist.map((x) => {
          return (
            <>
              <div
                key={x.id}
                className="d-flex flex-column"
                style={{ maxWidth: "22.5%", minWidth: "250px" }}
              >
                <Moviecard
                  movies={favoritelist}
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
    </>
  );
}
