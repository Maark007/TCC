import React from "react";
import Routes from "./router/routes";

import { UserContextProvider } from "./container/context";

export default function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}
