import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import changefavorite from "../store/actions/favorite";
import addfavorite from "../store/actions/addfavorite";
import { useEffect, useState } from "react";

export default function Moviecard(props) {
  const favoritelist = useSelector((state) => state.addfavorite.favlist);
  // console.log(favorite);

  const dispatchfavoritelist = useDispatch();
  const [moviefavlist, setmoviefavlist] = useState([]);
  // setmoviefavlist(favoritelist);
  // const movielist = favoritelist;
  // favoritelist.push(moviefavlist);
  function addtofav(x) {
    x = props.id;
    console.log(x);
    // console.log(props.id);
    console.log(props.movies);
    const movie = props.movies.find((y) => y.id === props.id);
    console.log(movie);

    // movielist.push(movie);
    // setmoviefavlist(moviefavlist.concat(moviefavlist.push(movie)));
    // setmoviefavlist(favoritelist.push(movie));
    // setmoviefavlist(movie);

    // dispatchfavorite(changefavorite(favorite === false ? true : false));
    favoritelist.push(movie);
    dispatchfavoritelist(addfavorite(favoritelist));
    console.log(favoritelist[0].id);
    console.log(moviefavlist);
  }

  function removefromfav(x) {
    const movie = props.movies.find((y) => y.id === props.id);
    console.log(movie);

    const newfavoritelist = favoritelist.filter((m) => m.id !== movie.id);
    console.log(newfavoritelist);
    // const indexi = favoritelist.indexOf(movie);
    // const include = favoritelist.includes(movie);
    // console.log(indexi);
    // console.log(include);
    dispatchfavoritelist(addfavorite(newfavoritelist));
  }
  return (
    <>
      <CardGroup>
        {/* <div className="d-flex flex-wrap"> */}
        <Card>
          <Card.Img variant="top" src={props.img} />
          <Card.ImgOverlay>
            <div
              className="fa-layers fa-fw fa-lg"
              style={{ fontSize: "50px" }}
              id={props.id}
              onClick={(x) => {
                addtofav(x);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-square" />
              <FontAwesomeIcon
                icon="fa-solid fa-heart"
                transform="shrink-6"
                // inverse
                // color={`${favorite ? "red" : "white"}`}
                color={"white"}
                // color={`${props.id == favoritelist[0].id ? "red" : "white"}`}
              />
            </div>
            {/* <div
              className="fa-layers fa-fw fa-lg"
              style={{ fontSize: "50px" }}
              id={props.id}
              onClick={(x) => {
                removefromfav(x);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-square" />
              <FontAwesomeIcon
                icon="fa-solid fa-heart"
                transform="shrink-6"
                // inverse
                // color={`${favorite ? "red" : "white"}`}
                color={"white"}
                // color={`${props.id == favoritelist[0].id ? "red" : "white"}`}
              />
            </div> */}
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Title>{props.movie}</Card.Title>
            <Card.Text>
              {/* This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. */}
              {props.overview}
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
        {/* </div> */}
      </CardGroup>
    </>
  );
}
