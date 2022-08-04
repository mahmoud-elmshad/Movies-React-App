// import logo from './logo.svg';
import "./App.css";
import Login from "./login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./register/register";
import Navbari from "./navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/home";
import Movies from "./movies/movies";
import Moviedetails from "./movies/moviedetails";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Favorites from "./favorites/favorites";
import {
  faHeart,
  faCircle,
  faSquare,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { LanguageProvider } from "./contexts/language";
import { useState } from "react";

library.add(fab, faHeart, faCircle, faSquare, faCoffee);

function App() {
  const [lang, setLanguage] = useState("en");
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="container-fluid">
      <Router>
        <LanguageProvider value={{ lang, setLanguage }}>
          <Navbari />
          <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/movies/details/:id" exact component={Moviedetails} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </LanguageProvider>
      </Router>
    </div>
  );
}

export default App;
