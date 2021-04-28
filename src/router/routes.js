import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Subject from "../pages/subject/subject";
import UserRoute from "./routes/userRouter";
import Login from "../pages/auth/login";
import Note from '../pages/notes/notes'
import Home from "../pages/home/home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <UserRoute exact path="/home" children={<Home />} />
        <UserRoute exact path="/materia/:disciplina" children={<Subject />} />
        <UserRoute exact path="/notes" children={<Note />} />

        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
