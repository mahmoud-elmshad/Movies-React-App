/* eslint-disable eqeqeq */
import React, { useState } from "react";

export default function Register() {
  const [user, setuser] = useState({
    username: "",
    useremail: "",
    userusername: "",
    userpassword: "",
    userconfirmpassword: "",
  });

  const [error, seterror] = useState({
    usernameerror: null,
    useremailerror: null,
    userusernameerror: null,
    userpassworderror: null,
    userconfirmpassworderror: null,
  });
  function handleinput(event) {
    setuser({
      ...user,
      [event.target.name]: event.target.value,
    });

    if (event.target.name == "username") {
      seterror({
        ...error,
        usernameerror: event.target.value.length == 0 ? "Required" : null,
      });
    } else if (event.target.name == "useremail") {
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
    } else if (event.target.name == "userusername") {
      seterror({
        ...error,
        userusernameerror:
          event.target.value.length == 0
            ? "Required"
            : event.target.value.includes(" ")
            ? "Not Accepted"
            : null,
      });
    } else if (event.target.name == "userpassword") {
      let regex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*[@$!%*?&]).{8,}$"
      );

      seterror({
        ...error,
        userpassworderror:
          event.target.value.length == 0
            ? "Required"
            : !regex.test(event.target.value)
            ? "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
            : null,
      });
    } else if (event.target.name == "userconfirmpassword") {
      seterror({
        ...error,
        userconfirmpassworderror:
          event.target.value.length == 0
            ? "Required"
            : event.target.value != user.userpassword
            ? "Must match"
            : null,
      });
    }
  }

  function handlesubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <form onSubmit={(event) => handlesubmit(event)} className="mt-3">
        <div className="col-md-6">
          <label for="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${
              error.usernameerror ? "border-danger shadow-none" : ""
            }`}
            id="inputName"
            value={user.username}
            name="username"
            onChange={(event) => handleinput(event)}
          />
          <small className="text-danger">{error.usernameerror}</small>
        </div>

        <div className="col-md-6">
          <label for="inputEmail" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className={`form-control ${
              error.useremailerror ? "border-danger shadow-none" : ""
            }`}
            id="inputEmail"
            value={user.useremail}
            name="useremail"
            onChange={(event) => handleinput(event)}
          />
          <small className="text-danger">{error.useremailerror}</small>
        </div>

        <div className="col-md-6">
          <label for="inputUserName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className={`form-control ${
              error.userusernameerror ? "border-danger shadow-none" : ""
            }`}
            id="inputUserName"
            value={user.userusername}
            name="userusername"
            onChange={(event) => handleinput(event)}
          />
          <small className="text-danger">{error.userusernameerror}</small>
        </div>

        <div className="col-md-6">
          <label for="inputPassword4.0" className="form-label">
            Password
          </label>
          <div className="d-flex">
            <input
              type="password"
              className={`form-control ${
                error.userpassworderror ? "border-danger shadow-none" : ""
              }`}
              id="inputPassword4.0"
              value={user.userpassword}
              name="userpassword"
              onChange={(event) => handleinput(event)}
            />

            {/* <button className="btn btn-primary" onClick={togglepassword}>
              Show
            </button> */}
          </div>
          <small className="text-danger">{error.userpassworderror}</small>
        </div>

        <div className="col-md-6">
          <label for="inputPassword4.1" className="form-label">
            Confirm Password
          </label>
          <div className="d-flex">
            <input
              type="password"
              className={`form-control ${
                error.userconfirmpassworderror
                  ? "border-danger shadow-none"
                  : ""
              }`}
              id="inputPassword4.1"
              value={user.userconfirmpassword}
              name="userconfirmpassword"
              onChange={(event) => handleinput(event)}
            />

            {/* <button className="btn btn-primary" onClick={togglepassword}>
              Show
            </button> */}
          </div>
          <small className="text-danger">
            {error.userconfirmpassworderror}
          </small>
        </div>

        <button className="btn btn-success" type="submit">
          Register
        </button>
      </form>
    </>
  );
}
