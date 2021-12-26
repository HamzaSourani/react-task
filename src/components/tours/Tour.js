import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
function Tour({ id, image, info, name, price, handleRefreash }) {
  const [seeMore, setSeeMore] = useState(true);

  return (
    <Card style={{ marginTop: 20 }}>
      <CardActionArea>
        <CardMedia image={image} style={{ height: 250 }} title={name} />
        <CardContent>
          <Grid container>
            <Grid item xs={10}>
              <Typography
                variant="h4"
                style={{ display: "inline-block", marginRight: 100 }}
              >
                {name}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <span
                style={{
                  fontSize: 20,
                  color: "red",
                  display: "inline-block",
                  paddingTop: 10,
                }}
              >{`price ${price}`}</span>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p">
            {seeMore ? `${info.substring(0, 200)}...` : info}
            <Button
              size="small"
              color="primary"
              onClick={() => setSeeMore(!seeMore)}
            >
              {seeMore ? "see more" : "see leas"}
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleRefreash(id)}
        >
          Clear Toure
        </Button>
      </CardActions>
    </Card>
  );
}

export default Tour;
