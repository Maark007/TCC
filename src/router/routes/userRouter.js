import React from "react";
import Layout from "../../layout/layout";

import { getToken } from "../../services/auth";
import { Redirect } from "react-router-dom";

const UserRoute = ({ children, ...rest }) => {
  // if (getToken()) {
  //   return <Layout>{children}</Layout>;
  // } else {
  //   return <Redirect to="/" />;
  // }
  return <Layout>{children}</Layout>
};

export default UserRoute;
