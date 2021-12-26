import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
function Lists({ list, removeItem, editItem }) {
  return (
    <List>
      {list.map((item) => (
        <ListItem
          key={item.id}
          style={{
            border: "solid 1px #837ce6",
            marginTop: "1em",
            borderRadius: "5em  ",
          }}
        >
          <ListItemText primary={item.title} />
          <ListItemIcon>
            <IconButton onClick={() => editItem(item.id)}>
              <UpdateIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemIcon>
            <IconButton onClick={() => removeItem(item.id)}>
              <DeleteForeverIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}

export default Lists;
