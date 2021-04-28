import React, { useEffect } from "react";
import Swal from "sweetalert2";

import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useHistory } from "react-router-dom";
import { Body } from "./headerStyle";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";

export default function Header({ setOpenSidebar }) {
  const history = useHistory();
  const isMobile = useWindowWidth() <= 800;

  useEffect(() => {
    if (isMobile) setOpenSidebar(false);
  }, [isMobile, setOpenSidebar]);

  const logoutSession = () => {
    return Swal.fire({
      title: "Opps",
      text: "Deseja sair da sessão?",
      icon: "question",
      confirmButtonText: "OK",
    }).then(async (result) => {
      if (result.value) {
        return history.push("/");
      }
    });
  };

  return (
    <Body>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => setOpenSidebar((prev) => !prev)}
            edge="start"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="header-title">
            Maker
          </Typography>
          <IconButton onClick={logoutSession} color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Body>
  );
}
