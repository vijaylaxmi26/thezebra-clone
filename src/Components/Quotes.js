import React from "react";
import "./Quotes.css";
import Container from "@mui/material/Container";
import rate_card from "../img/_homepage-auto-rate-card.svg";
import agent from "../img/_homepage-ask-an-agent.svg";
import person from "../img/_homepage-sitting-person.svg";
import QuotesRow from "./QuotesRow";

function Quotes() {
  return (
    <Container style={{ marginTop: "10%" }}>
      <div className="QuotesContent">
        <h1>
          Get personalized quotes in
          <br />5 minutes
        </h1>
        <p>
          No matter where you live or what you drive, we find the policies that
          are right for you.
        </p>
      </div>

      <QuotesRow
        image={rate_card}
        alt_text="rate card"
        text="No need to shop around. Review every major provider side-by-side in one place."
        heading="One marketplace for every major provider"
      />

      <QuotesRow
        image={person}
        alt_text="person"
        text="Whether you're looking to save on a car or home policy, we find the best value for you."
        heading="Find a match and save hundreds every year"
      />

      <QuotesRow
        image={agent}
        alt_text="agent"
        text="Our licensed agents are always standing by to help you as your needs change."
        heading="We've got you covered"
      />
    </Container>
  );
}

export default Quotes;
