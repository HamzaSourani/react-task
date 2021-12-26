import React, { useState, useEffect } from "react";
import personFile from "./data";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: { margin: "15% auto" },
  cardMedia: { height: 200, position: "relative" },
  avatar: {
    position: "absolute",
    top: "5%",
    left: "34%",
    width: "30%",
    height: "94%",
    border: "solid 1px blue",
    boxShadow: "1px 1px 3px 2px black",
  },
  imagePerson: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  cardContent: {
    textAlign: "center",
  },
  chevronL: { marginLeft: "43%", color: "blue" },
  chevronR: { color: "blue" },
}));
function Reviews() {
  const classes = useStyles();

  const [person, setPerson] = useState(0);
  const { name, job, image, text } = personFile[person];
  const checkValedateLength = (number) => {
    switch (number) {
      case personFile.length:
        return 0;

      case -1:
        return personFile.length - 1;

      default:
        return number;
    }
  };
  const handleChevrontLeft = () => {
    setPerson((person) => {
      let newPerson = person - 1;
      return checkValedateLength(newPerson);
    });
  };
  useEffect(() => {
    let autoSlide = setInterval(() => handleChevrontRight(), 5000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [person]);

  const handleChevrontRight = () => {
    setPerson((person) => {
      let newPerson = person + 1;
      return checkValedateLength(newPerson);
    });
  };

  return (
    <main>
      <Grid container justify="center">
        <Grid item xs={10} sm={8} md={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.cardMedia}>
                <Avatar className={classes.avatar}>
                  <img className={classes.imagePerson} src={image} alt={name} />
                </Avatar>
              </CardMedia>
              <CardContent className={classes.cardContent}>
                <Typography variant="h4">{name}</Typography>
                <Typography variant="h5">{job}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {text}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                className={classes.chevronL}
                onClick={handleChevrontLeft}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                className={classes.chevronR}
                onClick={handleChevrontRight}
              >
                <ChevronRightIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </main>
  );
}

export default Reviews;
