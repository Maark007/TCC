import React from "react";
import Layout from "../../layout/layout";

import { isAuthenticated } from "../../services/auth";
import { Redirect } from "react-router-dom";

export const UserRoute = ({ children, ...rest }) => {
  if (isAuthenticated()) {
    return <Layout>{children}</Layout>;
  } else {
    return <Redirect to="/" />;
  }
};
