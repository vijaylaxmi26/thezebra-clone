import { Container } from "@mui/material";
import React from "react";
import "./Estimate.css";
import Button from "@mui/material/Button";

function Estimate() {
  return (
    <Container>
      <div className="Content">
        <h1>Get a quick estimate</h1>
        <p>
          Not ready to buy a policy? Run your numbers on our car insurance
          calculator to estimate how much your policy will cost.
        </p>
      </div>

      <div className="Estimate_que">
        <h3>About me:</h3>
        <label>What year is your vehicle?</label>
        <div className="inputvalue">
          <select id="vehivle" name="vehicle">
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
          </select>
        </div>
        <label>What is your ZIP code?</label>
        <div className="inputvalue">
          <input type="number" placeholder="Enter ZIP Code" />
        </div>

        <label>When were you born?</label>
        <div className="inputvalue">
          <input type="date" placeholder="YYYY-MM-DD" />
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Button size="Large" variant="contained">
          See my estimate
        </Button>
      </div>
    </Container>
  );
}

export default Estimate;
