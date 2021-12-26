import React, { useState } from "react";
import data from "./data";
import Lists from "./List";
import "./index.css";
import {
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  Card: {
    marginTop: 40,
    textAlign: "center",
    backgroundColor: "#eef",
  },
  Button: {
    margin: "auto",
  },
}));

const PirthDay = () => {
  const [people, setPeople] = useState(data);

  const classes = useStyle();
  return (
    <Container fixed>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} lg={6}>
          <Card className={classes.Card}>
            <CardContent>
              <h1>{people.length} totat pirthday</h1>
              <Lists people={people} />
            </CardContent>
            <CardActions>
              <Button
                className={classes.Button}
                variant="contained"
                color="primary"
                onClick={() => setPeople([])}
              >
                clear all
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PirthDay;
