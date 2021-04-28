import React, { useState } from "react";

import { Main, MiddleDivisor, ImageDivisor, LoginDivisor } from "./styles";

import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/Lock";
import Input from "@material-ui/core/Input";

import Register from "../../components/register/register";
import CartoonImage from "../../assets/cartoon.png";

export default function Login() {
  const [showLoginForms, setShowLoginForms] = useState("login");

  return (
    <Main>
      <MiddleDivisor>
        <ImageDivisor>
          <div className="delivery-image-box">
            <img draggable="false" src={CartoonImage} alt="delivery" />
          </div>
        </ImageDivisor>
        <LoginDivisor>
          <div className="login-container">
            <div className="ramon-title">
              <h1>Maker</h1>
            </div>
            <div style={{ display: "flex" }}>
              <h4
                onClick={() => setShowLoginForms("login")}
                className={`${
                  showLoginForms === "login"
                    ? "active-border"
                    : "hvr-underline-from-center"
                }`}
              >
                Login
              </h4>
              <h4
                onClick={() => setShowLoginForms("register")}
                className={`${
                  showLoginForms === "register"
                    ? "active-border"
                    : "hvr-underline-from-center"
                }`}
              >
                Registrar
              </h4>
            </div>
            <div className="login-input-container">
              {showLoginForms === "login" ? (
                <form className="formsEffect">
                  <FormControl fullWidth>
                    <InputLabel>Email</InputLabel>
                    <Input
                      type="email"
                      name="email"
                      required
                      startAdornment={
                        <InputAdornment position="start">
                          <MailOutlineIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl style={{ marginTop: 20 }} fullWidth>
                    <InputLabel>Senha</InputLabel>
                    <Input
                      type="password"
                      name="password"
                      required
                      startAdornment={
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <div className="login-button">
                    <button>Login</button>
                  </div>
                  <div className="create-account-span">
                    <span>Não possui uma conta ?</span>
                    <p onClick={() => setShowLoginForms("register")}>
                      Registrar
                    </p>
                  </div>
                </form>
              ) : (
                <Register />
              )}
            </div>
          </div>
        </LoginDivisor>
      </MiddleDivisor>
    </Main>
  );
}
