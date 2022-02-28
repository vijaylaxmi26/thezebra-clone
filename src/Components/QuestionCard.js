import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function QuestionCard({ ques, ans }) {
  return (
    <div style={{ marginTop: "25px" }}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {ques}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
              {ans}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
