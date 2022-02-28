import React from "react";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";

function CardProduct({ size, img, text }) {
  return (
    <Grid item xs={size}>
      <Card>
        <CardActionArea>
          <div style={{ textAlign: "center", height: "100" }}>
            <img src={img} alt=".." height={100} />
          </div>
          <CardContent>
            <Typography gutterBottom variant="p" component="div">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardProduct;
