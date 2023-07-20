import React from "react";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

import CSS from "./register.module.css";

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
  isMember: false,
};

const Register = () => {
  const navigate = useNavigate();
  const { user, setUpUser } = useAppContext();

  const [values, setValues] = useState(initialState);
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, isMember, passwordConfirm } = values;
    if (
      !email ||
      !password ||
      (!isMember && !username) ||
      (!isMember && !passwordConfirm)
    ) {
      alert("Fill Complete");
      return;
    }

    // const currentUser = { username, email, password, passwordConfirm };
    if (isMember) {
      setUpUser(username, email, password, password, "login");
    } else {
      setUpUser(username, email, password, passwordConfirm, "register");
    }
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(values);
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <>
      <div className={CSS.nav}>
        <h1 className={`${CSS.logo} ${CSS.flexitem}`}>MyNutritionGuide</h1>
        <p className={CSS.profile}>
          Hi,
          <a className={`${CSS.name} ${CSS.flexitemh}`} href="/">
            {values.isMember ? "Login" : "Register"}
          </a>
        </p>
        <a href="/" className={`${CSS.blog} ${CSS.flexitemh}`}>
          Blog
        </a>
      </div>

      <form className={CSS.form} onSubmit={onSubmit}>
        {/* <Logo /> */}
        <div className={CSS.container}>
          <h3 className={CSS.h3}>{values.isMember ? "Login" : "Register"}</h3>
          {!values.isMember && (
            <div className={CSS.input}>
              <label className={CSS.lable}>Name : </label>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                className={CSS.in}
                placeholder="Name"
              />
            </div>
          )}
          <div className={CSS.input}>
            <label className={CSS.lable}>Email : </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={CSS.in}
              placeholder="Email"
            />
          </div>
          <div className={CSS.input}>
            <label className={CSS.lable}>Password : </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className={CSS.in}
              placeholder="Password"
            />
          </div>
          {!values.isMember && (
            <div className={CSS.input}>
              <label className={CSS.lable}>Password Confirn : </label>
              <input
                type="password"
                name="passwordConfirm"
                value={values.passwordConfirm}
                onChange={handleChange}
                className={CSS.in}
                placeholder="Password Confirm"
              />
            </div>
          )}
          <button type="submit" className={CSS.submit}>
            Submit
          </button>
          <p>
            {values.isMember ? "Not a member yet?" : "Already a member?"}
            <button
              type="button"
              onClick={toggleMember}
              className={CSS.togbutton}
            >
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </form>
    </>
  );
};

export default Register;
