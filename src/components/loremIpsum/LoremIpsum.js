import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import data from "./data";
const useStyles = makeStyles(() => ({
  title: { textAlign: "center", padding: 20 },
  divider: { margin: 10, backgroundColor: "blue" },
  form: {
    textAlign: "center",
    padding: 20,
    borderWidth: "0px 1px 1px",
    borderStyle: "solid",
    borderColor: "blue",
    marginBottom: 40,
  },
  submitButton: { marginLeft: 20 },
  paragraph: { marginBottom: 100 },
}));
const LoremIpsum = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [paragraph, setParagraph] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) amount = 1;
    if (count > 8) amount = 8;
    setParagraph(data.slice(0, amount));
  };
  return (
    <>
      <Grid container justify="center">
        <Grid item xm={10} md={8}>
          <Typography className={classes.title} variant="h3" component="h3">
            Lorem Ipsum
          </Typography>
          <Divider className={classes.divider} />
          <Grid container justify="center">
            <Grid item xm={10} md={8}>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  type="number"
                  label="paragraph:"
                  value={count}
                  size="small"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => setCount(e.target.value)}
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
          <section className={classes.paragraphnp}>
            {paragraph.map((item, index) => {
              return (
                <Typography key={index} variant="p" component="p">
                  {item}
                </Typography>
              );
            })}
          </section>
        </Grid>
      </Grid>
    </>
  );
};

export default LoremIpsum;
