import React from "react";
import "./Product.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardProduct from "./Cardproduct";
import car from "../img/car.png";

function Product() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <div className="Content">
        <h1>
          Simplifying the way you
          <br /> shop for Insurance
        </h1>
        <p>
          We compare 100+ insurance companies to find the policy that’s right
          for you.
        </p>

        <h4>Select Product</h4>
      </div>

      <Grid container spacing={1}>
        <CardProduct size="6" text="Car Insurance" img={car} />
        <CardProduct size="3" text="Home" img={car} />
        <CardProduct size="3" text="Car + Home" img={car} />
        <CardProduct size="2" text="Car + Renters" img={car} />
        <CardProduct size="2" text="Renters" img={car} />
        <CardProduct size="2" text="Pet" img={car} />
        <CardProduct size="2" text="Life" img={car} />
        <CardProduct size="2" text="Commercial Auto" img={car} />
        <CardProduct size="2" text="Small Buisiness" img={car} />
      </Grid>
    </Container>
  );
}

export default Product;
