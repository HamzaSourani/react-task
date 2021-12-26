import React from "react";
import { Button, ButtonGroup, Grid } from "@material-ui/core";
function MenuButton({ menu, filterCtegory }) {
  return (
    <Grid container justify="center">
      <Grid item sx={6}>
        <ButtonGroup color="secondary">
          {menu.map((m, index) => (
            <Button key={index} onClick={() => filterCtegory(m)}>
              {m}
            </Button>
          ))}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default MenuButton;
