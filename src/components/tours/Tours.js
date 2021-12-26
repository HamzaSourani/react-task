import React, { useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import ToursCards from "./ToursCards";
const url = "https://course-api.com/react-tours-project";

function Tours() {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const responce = await fetch(url);
    const tours = await responce.json();
    setTours(tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleRefreash = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0)
    return (
      <>
        <Typography component="h1">No more tours</Typography>
        <Button variant="contained" color="primary" onClick={fetchTours}>
          Refrash
        </Button>
      </>
    );
  else
    return (
      <div style={{ marginBottom: 40 }}>
        <ToursCards tours={tours} handleRefreash={handleRefreash} />
      </div>
    );
}

export default Tours;
