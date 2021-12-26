import React from "react";
import {
  List as ListUi,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <ListUi key={id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <img src={image} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={name} secondary={age} />
            </ListItem>
          </ListUi>
        );
      })}
    </>
  );
};

export default List;
