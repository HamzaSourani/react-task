import React, { useState } from "react";
import Menu from "./MenuButton";
import Category from "./Category";
import { Typography, Container, Grid } from "@material-ui/core";
import items from "./data";
const Menue = () => {
  const [categorys, setCategorys] = useState(items);
  const mnueClasses = ["all", ...new Set(items.map((item) => item.category))];
  const [menu, setMenu] = useState(mnueClasses);
  const filterCtegory = (category) => {
    if (category == "all") {
      setCategorys(items);
      return;
    }
    let newCategorys = items.filter((item) => item.category === category);
    setCategorys(newCategorys);
  };
  console.log(mnueClasses);
  const style = {
    color: "red",
    textDecoration: "underline",
    textAlign: "center",
    margin: "50px 0px",
  };
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" style={style}>
            our mnue
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Menu menu={menu} filterCtegory={filterCtegory} />
        </Grid>
        <Grid item xs={12}>
          <Category categorys={categorys} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Menue;
