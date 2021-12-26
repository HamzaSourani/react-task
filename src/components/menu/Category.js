import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Grid,
} from "@material-ui/core";

function Category({ categorys }) {
  return (
    <Grid container justify="center">
      <Grid item sx={6}>
        <List style={{ marginTop: "5%" }}>
          {categorys.map((category) => (
            <ListItem key={category.id}>
              <ListItemAvatar
                style={{ width: 150, height: 100, marginRight: 20 }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",

                    objectFit: "cover",
                    border: "1px solid red",
                  }}
                  src={category.img}
                  alt={category.title}
                />
              </ListItemAvatar>
              <ListItemText
                style={{ marginTop: "-4%", maxWidth: 400 }}
                primary={category.title}
                secondary={category.desc}
              />
              <ListItemText
                style={{ marginTop: "-10% ", color: "red" }}
                primary={category.price}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default Category;
