import React from "react";
import "./Product.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardProduct from "./Cardproduct";
import car from "../img/car.png";

function Product() {
  return (
    <Container>
      <div className="Content">
        <h1>Simplifying the way you shop for Insurance</h1>
        <p>
          We compare 100+ insurance companies to find the policy that’s right
          for you.
        </p>

        <h4>Select Product</h4>
      </div>

      <Grid container spacing={1} className="pro_a">
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

      <Grid container spacing={1} className="pro_b">
        <CardProduct size="12" text="Car Insurance" img={car} />
        <CardProduct size="12" text="Home" img={car} />
        <CardProduct size="12" text="Car + Home" img={car} />
        <CardProduct size="12" text="Car + Renters" img={car} />
      </Grid>

      <div className="Content view" style={{ marginTop: "5%" }}>
        <a style={{ color: "black" }} href="#">
          View More
        </a>
      </div>
    </Container>
  );
}

export default Product;
