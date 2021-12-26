import React, { useEffect, useState } from "react";
import Values from "values.js";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Color from "./Color";
const useStyles = makeStyles(() => ({
  title: { textAlign: "center", padding: 20 },
  divider: { margin: 10, backgroundColor: "blue" },
  form: {
    textAlign: "center",
    padding: 20,
    marginBottom: 40,
  },
  submitButton: { marginLeft: 20 },
  paragraph: { marginBottom: 100 },
}));
const Generator = () => {
  const classes = useStyles();
  const [color, setColor] = useState("#f15025");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    try {
      let Colors = new Values(color).all(10);
      setList(Colors);
      console.log(list);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <Grid container justify="center">
        <Grid item xm={10} md={8}>
          <Typography className={classes.title} variant="h3" component="h3">
            Color Generator
          </Typography>
          <Divider className={classes.divider} />
          <Grid container justify="center">
            <Grid item xm={10} md={8}>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  id="hex-color"
                  error={error}
                  type="text"
                  label="hex-color:"
                  value={color}
                  size="small"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => setColor(e.target.value)}
                  helperText={error ? "an correct rgb color" : ""}
                />
                <Button
                  className={classes.submitButton}
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Generate
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {list.map((ancolor, index) => {
              return (
                <Grid key={index} item xs={6} sm={6} md={4} lg={2}>
                  <Color {...ancolor} index={index} hexColor={ancolor.hex} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Generator;
