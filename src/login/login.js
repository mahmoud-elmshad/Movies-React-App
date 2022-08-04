/* eslint-disable eqeqeq */
import React, { useState } from "react";

export default function Login() {
  const [user, setuser] = useState({
    useremail: "",
    userpassword: "",
  });

  const [error, seterror] = useState({
    useremailerror: null,
    userpassworderror: null,
  });

  // const [text, settext] = useState("");
  const [password, setpassword] = useState("password");

  // function handlepassword() {}

  function togglepassword() {
    if (password === "password") {
      setpassword("text");
      console.log(password);
    } else if (password === "text") {
      setpassword("password");
    }
  }

  //   let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  //   console.log(regex.test("abc@gmail.com"));

  function handleinput(event) {
    // console.log(event.target.name, event.target.value);
    // setuser({
    //   ...user,
    //   [event.target.name]: event.target.value,
    // });
    if (event.target.name == "useremail") {
      setuser({
        ...user,
        useremail: event.target.value,
      });

      let regex = new RegExp("^[a-zA-Z0-9]+@([a-zA-Z]{3,}).([A-Za-z]{2,3})$");

      seterror({
        ...error,
        useremailerror:
          event.target.value.length == 0
            ? "Required"
            : !regex.test(event.target.value)
            ? "Not Accepted"
            : null,
      });
    } else if (event.target.name == "userpassword") {
      setuser({
        ...user,
        userpassword: event.target.value,
      });

      seterror({
        ...error,
        userpassworderror:
          event.target.value.length == 0
            ? "Required"
            : event.target.value.length < 8
            ? "More than 8 characters"
            : null,
      });
    }
  }

  function handlesubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={(event) => handlesubmit(event)}>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className={`form-control ${
              error.useremailerror ? "border-danger shadow-none" : ""
            }`}
            id="inputEmail4"
            value={user.useremail}
            name="useremail"
            onChange={(event) => handleinput(event)}
          />
          <small className="text-danger">{error.useremailerror}</small>
        </div>

        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <div className="d-flex">
            <input
              type={password}
              className={`form-control ${
                error.userpassworderror ? "border-danger shadow-none" : ""
              }`}
              id="inputPassword4"
              value={user.userpassword}
              name="userpassword"
              onChange={(event) => handleinput(event)}
            />

            <button className="btn btn-primary" onClick={togglepassword}>
              Show
            </button>
          </div>
          <small className="text-danger">{error.userpassworderror}</small>
        </div>

        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </>
  );
}
