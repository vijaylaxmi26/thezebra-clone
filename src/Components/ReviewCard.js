import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

function ReviewCard({ text, author, size }) {
  console.log(size);
  return (
    <Grid item xs={{ size }}>
      <Card>
        <CardContent>
          <h4>{text}</h4>
          <p style={{ textAlign: "right" }}>{author}</p>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ReviewCard;
