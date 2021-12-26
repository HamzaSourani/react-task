import React, { useState, useEffect } from "react";
import {
  Container,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ButtonGroup,
  Button,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
const url = "https://course-api.com/react-tabs-project";
const useStyles = makeStyles(() => ({
  btn: {
    color: "black",
  },
  btnActive: {
    color: "#d65a6b",
  },
  mainTitel: {
    textAlign: "center",
  },
  loding: {
    textAlign: "center",
  },
  divider: {
    margin: "20px auto",
    width: "30%",
    backgroundColor: "red",
  },
  btnGroup: {
    padding: "3px",
    border: "solid 1px red",
  },
  company: {
    display: "block",
    color: "red",
    margin: "10px 0",
  },
  doubleArrowIcon: {
    color: "red",
  },
}));
function Taps() {
  const [value, setValue] = useState(0);
  const [loding, setLoding] = useState(true);
  const [job, setJob] = useState([]);
  const classes = useStyles();
  const fetchJobs = async () => {
    const responce = await fetch(url);
    const newJobs = await responce.json();
    setJob(newJobs);
    setLoding(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loding) {
    return <h1 className={classes.loding}>loding...</h1>;
  }
  const { company, dates, duties, title } = job[value];
  return (
    <Container>
      <Typography
        variant="h3"
        style={{ margin: "20px" }}
        className={classes.mainTitel}
      >
        Experience
      </Typography>
      <Divider className={classes.divider} />
      <Grid container justify="center">
        <Grid item sx={6}>
          <ButtonGroup
            className={classes.btnGroup}
            variant="contained"
            color="primary"
          >
            {job.map((item, index) => (
              <Button
                key={index}
                onClick={() => setValue(index)}
                className={`${classes.btn} ${
                  index === value && classes.btnActive
                }`}
              >
                {item.company}
              </Button>
            ))}
          </ButtonGroup>
        </Grid>
      </Grid>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="p" className={classes.company}>
        {company}
      </Typography>
      <Typography variant="p">{dates}</Typography>
      {duties.map((duty, index) => (
        <List key={index}>
          <ListItem>
            <ListItemIcon>
              <DoubleArrowIcon className={classes.doubleArrowIcon} />
            </ListItemIcon>
            <ListItemText primary={duty} />
          </ListItem>
        </List>
      ))}
    </Container>
  );
}

export default Taps;
