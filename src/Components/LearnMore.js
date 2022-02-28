import React, { useState, useEffect } from "react";
import img1 from "../img/homepage_compressed_autoinsuranceindex.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import { Grid, Container } from "@mui/material";
import LearnMoreCard from "./LearnMoreCard";

function LearmMore() {
  const [sizea, setSizea] = useState("4");
  const [sizeb, setSizeb] = useState("3");
  useEffect(() => {
    function updateSize() {
      if (window.innerWidth < 600) {
        setSizea("12");
        setSizeb("12");
      } else {
        setSizea("4");
        setSizeb("3");
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [sizea, sizeb]);

  return (
    <Container sx={{ flexGrow: 1 }}>
      <div className="Content">
        <h1>Want to learn more?</h1>
      </div>

      <Grid container spacing={2}>
        <LearnMoreCard
          size={sizea}
          img={img1}
          text="Find car insurance quickly by comparing auto insurance quotes online from companies like Progressive, Nationwide, Liberty Mutual and Allstate."
          head="Free Car Insurance Quotes"
        />
        <LearnMoreCard
          size={sizea}
          img={img2}
          text="Our analysis collected rates from dozens of popular insurance companies: use the data to find a policy."
          head="Compare Auto Insurance Rates Online"
        />

        <LearnMoreCard
          size={sizea}
          img={img1}
          text="Find car insurance quickly by comparing auto insurance quotes online from companies like Progressive, Nationwide, Liberty Mutual and Allstate."
          head="Free Car Insurance Quotes"
        />

        <LearnMoreCard
          size={sizeb}
          img={img2}
          text="See which company offers the best cheap car insurance. Compare coverage options, find affordable auto insurance and save on your next policy."
          head="The Best Cheap Car Insurance for 2022"
        />
        <LearnMoreCard
          size={sizeb}
          img={img3}
          text="If you’re looking to buy a home, consider these simple ways to ensure you’re properly covered at the cheapest possible rate."
          head="Compare Home Insurance Rates Online"
        />
        <LearnMoreCard
          size={sizeb}
          img={img4}
          text="See which company offers the best cheap car insurance. Compare coverage options, find affordable auto insurance and save on your next policy."
          head="The Best Cheap Car Insurance for 2022"
        />
        <LearnMoreCard
          size={sizeb}
          img={img5}
          text="See which company offers the best cheap car insurance. Compare coverage options, find affordable auto insurance and save on your next policy."
          head="The Best Cheap Car Insurance for 2022"
        />
      </Grid>
    </Container>
  );
}

export default LearmMore;
