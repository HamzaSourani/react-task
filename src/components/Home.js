import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { NavLink, useRouteMatch } from "react-router-dom";

import "../assest/style.css";
import pirthdayimg from "../assest/thumb-74055.jpg";
const Home = () => {
  let { url } = useRouteMatch();
  const [oddLink, setOddLink] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", addLinkCard);
    return () => {
      window.removeEventListener("resize", addLinkCard);
    };
  }, [oddLink]);
  const addLinkCard = () => {
    if (window.innerWidth >= 300) setOddLink(true);
  };
  return (
    <div style={{ margin: "40px 200px" }}>
      <Grid container spacing={5}>
        <Grid item xs={10} sm={10} md={6} lg={4}>
          <NavLink to={`${url}parth-day`}>
            <div className="linkContenair">
              <img className="supAppLink" src={pirthdayimg}></img>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={10} sm={10} md={6} lg={4}>
          <NavLink to={`${url}tours`}>
            <div className="linkContenair">
              <img className="supAppLink" src={pirthdayimg}></img>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={10} sm={10} md={6} lg={4}>
          <NavLink to="reviews">
            <div className="linkContenair">
              <img className="supAppLink" src={pirthdayimg}></img>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={10} sm={10} md={6} lg={4}>
          <NavLink to="menu">
            <div className="linkContenair">
              <img className="supAppLink" src="./images/mnue.jpeg"></img>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={10} sm={10} md={6} lg={4}>
          <NavLink to="taps">
            <div className="linkContenair">
              <img className="supAppLink" src={pirthdayimg}></img>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={10} sm={10} md={6} lg={4}>
          <NavLink to="lorem-ipsum">
            <div className="linkContenair">
              <img className="supAppLink" src="./images/lorem.jpeg"></img>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={10} sm={10} md={6} lg={4}>
          <NavLink to="color-generator">
            <div className="linkContenair">
              <img
                className="supAppLink"
                src="./images/colorGenerator.jpeg"
              ></img>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={10} sm={10} md={6} lg={4}>
          <NavLink to="grocery">
            <div className="linkContenair">
              <img className="supAppLink" src="./images/groceryList.jpeg"></img>
            </div>
          </NavLink>
        </Grid>
        {{ oddLink } && <Grid item md={6} lg={4} style={{ width: 309 }}></Grid>}
      </Grid>
    </div>
  );
};

export default Home;
