import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Snackbar,
  Button,
  TextField,
  Card,
} from "@material-ui/core";
import useStyles from "./style";

import MuiAlert from "@material-ui/lab/Alert";
import List from "./List";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function getLocalStorage() {
  let list = localStorage.getItem("list");
  if (list) return JSON.parse(list);
  else return [];
}
function Grocery() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const showAlert = (open = false, severity = "", message = "") => {
    setAlert({ open, severity, message });
  };

  const classes = useStyles.useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      showAlert(true, "error", "please inter an item");
    } else if (isEditing) {
      setList(
        list.map((i) => {
          if (i.id === editId) {
            return { ...i, title: item };
          }
          return i;
        })
      );
      setItem("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: item };

      setList([...list, newItem]);
      setItem("");
    }
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const removeItem = (id) => {
    showAlert(true, "error", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setItem(specificItem.title);
  };

  const clearList = () => {
    showAlert(true, "error", "empty list");
    setList([]);
  };

  return (
    <Grid container justify="center">
      <Grid item md={8}>
        <Card className={classes.card}>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={alert.open}
            autoHideDuration={3000}
            onClose={() => showAlert(false)}
          >
            <Alert onClose={() => showAlert(false)} severity={alert.severity}>
              {alert.message}
            </Alert>
          </Snackbar>
          <Typography variant="h3">Grocery List</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              className={classes.textField}
              label="insert item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            ></TextField>
            <Button
              className={classes.buttom}
              variant="contained"
              color="secondary"
              type="submit"
            >
              {isEditing ? "Adit" : "submit"}
            </Button>
          </form>
          <List list={list} removeItem={removeItem} editItem={editItem} />
          <Button
            className={classes.buttom}
            variant="contained"
            color="primary"
            onClick={clearList}
          >
            clear all
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Grocery;
