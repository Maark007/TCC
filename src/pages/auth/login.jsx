import React, { useState } from "react";
import api from "../../services/api";
import Swal from "sweetalert2";

import { Main, MiddleDivisor, ImageDivisor, LoginDivisor } from "./styles";
import { isAuthenticated } from "../../services/auth";
import { Redirect } from "react-router-dom";

import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/Lock";
import Input from "@material-ui/core/Input";

import Register from "../../components/register/register";
import CartoonImage from "../../assets/cartoon.png";

export default function Login() {
  const [password, setPassword] = useState({ value: "", error: false });
  const [email, setEmail] = useState({ value: "", error: false });
  const [showLoginForms, setShowLoginForms] = useState("login");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.value) return setEmail({ error: true });
    if (!password.value) return setPassword({ error: true });

    try {
      const login = await api.post("/login", {
        email: email.value,
        password: password.value,
      });
      localStorage.setItem("id", login.data.id);
      return window.location.reload();
    } catch (err) {
      const { error } = err.response.data;
      return Swal.fire("Opps", error, "error");
    }
  };

  if (isAuthenticated()) return <Redirect to="/home" />;

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
                      onChange={(e) => setEmail({ value: e.target.value })}
                      error={email.error}
                      type="email"
                      name="email"
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
                      onChange={(e) => setPassword({ value: e.target.value })}
                      error={password.error}
                      type="password"
                      name="password"
                      startAdornment={
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <div className="login-button">
                    <button onClick={handleLogin}>Login</button>
                  </div>
                  <div className="create-account-span">
                    <span>Não possui uma conta ?</span>
                    <p onClick={() => setShowLoginForms("register")}>
                      Registrar
                    </p>
                  </div>
                </form>
              ) : (
                <Register setLoginForm={setShowLoginForms} />
              )}
            </div>
          </div>
        </LoginDivisor>
      </MiddleDivisor>
    </Main>
  );
}
