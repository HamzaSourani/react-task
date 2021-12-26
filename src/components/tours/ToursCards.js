import React from "react";
import Tour from "./Tour";
import { Grid } from "@material-ui/core";

function ToursCards({ tours, handleRefreash }) {
  console.log(tours);
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={8} sm={8} md={6}>
          {tours.map((tour) => (
            <Tour
              key={tour.id}
              {...tour}
              handleRefreash={handleRefreash}
            ></Tour>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default ToursCards;
