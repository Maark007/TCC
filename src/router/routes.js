import React from "react";

import { Switch, BrowserRouter, Route } from "react-router-dom";
import { UserRoute } from "./routes/userRouter";

import Bulletin from "../components/table/bulletin";
import NotesTable from "../components/table/table";
import Subject from "../pages/subject/subject";
import Login from "../pages/auth/login";
import Home from "../pages/home/home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <UserRoute exact path="/home" children={<Home />} />
        <UserRoute exact path="/materia/:disciplina" children={<Subject />} />
        <UserRoute exact path="/notes" children={<NotesTable />} />
        <UserRoute exact path="/bulletin" children={<Bulletin />} />

        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
