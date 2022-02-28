import React from "react";
import "./QuotesRow.css";
import Grid from "@mui/material/Grid";

function QuotesRow({ image, alt_text, text, heading, size }) {
  return (
    <div className="row">
      <Grid xs={{ size }}>
        <div className="image">
          <img src={image} alt={alt_text} />
        </div>
      </Grid>

      <Grid xs={{ size }}>
        <div className="content">
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
      </Grid>
    </div>
  );
}

export default QuotesRow;
