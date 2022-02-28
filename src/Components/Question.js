import { Container } from "@mui/material";
import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import QuestionCard from "./QuestionCard";

function Question() {
  return (
    <Container>
      <div
        className="Content"
        style={{ paddingRight: "15%", paddingLeft: "15%" }}
      >
        <HelpOutlineIcon fontSize="large" />
        <h1>Frequently asked questions</h1>
        <QuestionCard
          ques="Is The Zebra an insurance carrier?"
          ans="No, we're an insurance comparison site. The big difference is that we compare the top insurance companies in one place to help you find the best policy for you."
        />

        <QuestionCard
          ques="How does The Zebra work?"
          ans="All it takes is five minutes. You answer some questions, we'll crunch the numbers to show you quotes from every major insurance company. After you decide on a policy, you can buy online or through one of our licensed insurance agents."
        />

        <QuestionCard
          ques="Is The Zebra licensed?"
          ans="Each of our independent insurance agents is licensed to offer policies from every major provider. As your needs change, they'll always be there to help you find the coverage you need."
        />

        <QuestionCard
          ques="How does The Zebra make money?"
          ans="Great question. We make money in a couple ways. If you purchase a policy through one of our insurance agents, we earn a commission. When you choose to get a quote, we'll let your chosen insurance company know you're interested. Instead of a thank you card, they send a commission. These commissions allow us to provide our services free of charge to policy shoppers everywhere."
        />

        <QuestionCard
          ques="Who am I buying my policy from?"
          ans="It's your call. If you want to purchase a policy directly through your provider, they'll have your quote ready. Or you could skip the trip to another site and buy a policy through The Zebra. No matter which you choose, it's the same policy."
        />

        <QuestionCard
          ques="Is my personal information secure?"
          ans="Yes. As real people with real data, we understand the importance of keeping your personal information private. That's why we pledge to never sell your data to spammers."
        />
      </div>
    </Container>
  );
}

export default Question;
