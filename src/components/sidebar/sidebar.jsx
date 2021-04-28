import React, { useState } from "react";
import clsx from "clsx";

import { Body, ImageContent, Content } from "./sidebarStyles";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import AssessmentIcon from "@material-ui/icons/Assessment";
import HomeIcon from "@material-ui/icons/Home";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -240,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Sidebar({ openSideBar, children }) {
  const [whoIs, setWhoIs] = useState("teacher");
  const classes = useStyles();
  const history = useHistory();
  const isMobile = useWindowWidth() <= 800;

  const leftTransition = clsx(classes.content, {
    [classes.contentShift]: openSideBar,
  });

  return (
    <Body isOpen={openSideBar} isMobile={isMobile}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={openSideBar}
        className={classes.drawer}
      >
        <ImageContent>
          <div className="user-name">
            <span>Olá, Marcos Aurélio.</span>
          </div>
        </ImageContent>
        <Button
          onClick={() => history.push("/home")}
          className="btn-model"
          variant="contained"
          color="primary"
        >
          <HomeIcon />
          <span className="btn-span">Home</span>
        </Button>
        {whoIs === "teacher" && (
          <Button
            onClick={() => history.push("/notes")}
            className="btn-model"
            variant="contained"
            color="primary"
          >
            <AssessmentIcon />
            <span className="btn-span">Envias notas</span>
          </Button>
        )}
      </Drawer>
      <Content
        className={leftTransition}
        isOpen={openSideBar}
        isMobile={isMobile}
      >
        {children}
      </Content>
    </Body>
  );
}
