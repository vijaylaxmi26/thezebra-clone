import React, { useEffect, useState } from "react";
import "./Review.css";
import ReviewCard from "./ReviewCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Review() {
  const [size, setSize] = useState("4");
  useEffect(() => {
    function updateSize() {
      if (window.innerWidth < 600) setSize("12");
      else setSize("4");
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [size]);

  return (
    <Container>
      <div className="Content">
        <h1>Over 15 million quotes and counting</h1>
        <p>
          Read what customers have to say about our savings, customer service,
          and transparency.
        </p>
      </div>

      <Grid container spacing={1} style={{ marginTop: "100px" }}>
        <ReviewCard
          text="Had a quick response and great service and a shout out to Katy's excellent work. Thank you, saved me nearly 50% from my previous insurance."
          author="Michael H."
          className="Reviewcard"
          size={size}
        />

        <ReviewCard
          text="Quick and simple. Just give your info and you get a list of quotes to choose from and can purchase immediately"
          author="Tiffany"
          className="Reviewcard"
          size={size}
        />

        <ReviewCard
          text="Saved over 50% on auto insurance for same coverage I had with a company I'd been with for 13 years"
          author="Angela D."
          className="Reviewcard"
          size={size}
        />
      </Grid>

      <div className="Content" style={{ marginTop: "5%" }}>
        <a style={{ color: "black" }} href="#">
          Read more reviews
        </a>
      </div>
    </Container>
  );
}

export default Review;
