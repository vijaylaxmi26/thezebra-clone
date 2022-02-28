import { Container } from "@mui/material";
import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_content">
        <div className="Resource">
          <h3>Resources</h3>
          <a href="#">Cheap Liability Insurance</a>
          <br />
          <a href="#">Cheap Full Coverage Insurance</a>
          <br />
          <a href="#">Car Insurance Guide</a>
          <br />
          <a href="#">Home Insurance</a>
          <br />
          <a href="#">Best Cheap Car Insurace</a>
          <br />
          <a href="#">Best Cheap Home Insurace</a>
          <br />
          <a href="#">Cheap Insurace Tates by city</a>
          <br />
        </div>

        <div className="company">
          <h3>Insurace companies</h3>
          <a href="#">USAA</a>
          <br />
          <a href="#">Progressive</a>
          <br />
          <a href="#">Progressive-vs-Safecoo</a>
          <br />
          <a href="#">State-Farm-vs-Progressive</a>
          <br />
          <a href="#">Ensurance</a>
          <br />
          <a href="#">Eric</a>
          <br />
          <a href="#">Travelers</a>
          <br />
          <a href="#">USAA</a>
          <br />
          <a href="#">Metlife</a>
          <br />
        </div>

        <div className="State">
          <h3>Insurace companies</h3>
          <a href="#">AL</a>
          <a href="#">AK</a>
          <a href="#">AZ</a>
          <a href="#">AR</a>
          <a href="#">CA</a>
          <a href="#">CO</a>
          <a href="#">CT</a>
          <a href="#">DC</a>
          <a href="#">DE</a>
          <br />
          <a href="#">AL</a>
          <a href="#">AK</a>
          <a href="#">AZ</a>
          <a href="#">AR</a>
          <a href="#">CA</a>
          <a href="#">CO</a>
          <a href="#">CT</a>
          <a href="#">DC</a>
          <a href="#">DE</a>
          <br />
          <a href="#">AL</a>
          <a href="#">AK</a>
          <a href="#">AZ</a>
          <a href="#">AR</a>
          <a href="#">CA</a>
          <a href="#">CO</a>
          <a href="#">CT</a>
          <a href="#">DC</a>
          <a href="#">DE</a>
          <br />
          <a href="#">AL</a>
          <a href="#">AK</a>
          <a href="#">AZ</a>
          <a href="#">AR</a>
          <a href="#">CA</a>
          <a href="#">CO</a>
          <a href="#">CT</a>
          <a href="#">DC</a>
          <a href="#">DE</a>
        </div>
      </div>

      <div className="share">
        <div className="share_a">
          <a>About US</a>
          <a>Press</a>
          <a>We Are Hiring</a>
          <a>Contact Us</a>
        </div>

        <div className="share_a">
          <p>Follow Us on:</p>

          <span>
            <FacebookOutlinedIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <LinkedInIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
