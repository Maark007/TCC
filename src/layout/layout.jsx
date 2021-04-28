import React, { useState } from "react";
import { Body, Divider } from "./layoutStyles";

import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";

export default function Layout({ children }) {
  const [openSideBar, setOpenSidebar] = useState(true);
  return (
    <Body>
      <Header setOpenSidebar={setOpenSidebar} />
      <Divider>
        <Sidebar openSideBar={openSideBar}>{children}</Sidebar>
      </Divider>
    </Body>
  );
}
