import React from "react";
import Container from "@mui/material/Container";
import "./MoreState.css";

function MoreState() {
  return (
    <Container>
      <div className="Content">
        <h1>Learn more by city and state for</h1>
      </div>

      <div className="state">
        <a href="#">Austin</a>
        <a href="#">Baltimore</a>
        <a href="#">charlotte</a>
        <a href="#">chicago</a>
        <a href="#">Dallas</a>
        <a href="#">Denver</a>
        <a href="#">Detroit</a>
        <a href="#">EI-Paso</a>
        <a href="#">Fort-Worth</a>
        <a href="#">Houston</a>
        <a href="#">Jacksonville</a>
        <a href="#">Kansas-City</a>
        <a href="#">Lexington</a>
        <a href="#">Los-Angeles</a>
        <a href="#">Louisville</a>
        <a href="#">Lubbock</a>
        <a href="#">Philadelphia</a>
        <a href="#">Phoenix</a>
        <a href="#">Pittsburgh</a>
      </div>
    </Container>
  );
}

export default MoreState;
