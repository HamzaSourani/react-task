import React, { useState, useEffect } from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Hidden,
  Button,
  Divider,
  Toolbar,
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import "../style/navStyle.css";
import "fontsource-roboto";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Nav = () => {
  const classes = useStyles();
  const [modelOpen, setModleOpen] = useState(false);
  const sizeOfWindow = () => {
    if (window.innerWidth >= 600) setModleOpen(false);
  };
  useEffect(() => {
    window.addEventListener("resize", sizeOfWindow);
    return () => {
      window.removeEventListener("resize", sizeOfWindow);
    };
  }, [modelOpen]);
  const handleResponsaveNav = () => {
    setModleOpen(!modelOpen);
  };
  return (
    <nav>
      <Hidden xsDown>
        <AppBar position="static">
          <Toolbar>
            <Button className={classes.menuButton}>
              <NavLink
                exact
                activeClassName="navButtonActive"
                className="navButton"
                to="/"
              >
                HOME
              </NavLink>
            </Button>
            <Button className={classes.menuButton}>
              <NavLink
                activeClassName="navButtonActive"
                className="navButton"
                to="/about-me"
              >
                ABOUTME
              </NavLink>
            </Button>
            <Button className={classes.menuButton}>
              <NavLink
                activeClassName="navButtonActive"
                className="navButton"
                to="/contact-me"
              >
                CONTACTME
              </NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden smUp>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleResponsaveNav}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Drawer anchor="left" open={modelOpen} onClose={handleResponsaveNav}>
        <List>
          <ListItem button>
            <NavLink
              exact
              className="DrawerNavButton"
              activeClassName="DrawerNavButtonActive"
              to="/"
            >
              HOME
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink
              className="DrawerNavButton"
              activeClassName="DrawerNavButtonActive"
              to="/about-me"
            >
              ABOUTME
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink
              className="DrawerNavButton"
              activeClassName="DrawerNavButtonActive"
              to="/contact-me"
            >
              CONTACTME
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
};

export default Nav;
