import * as React from "react";
import "./Header.css";
import Logo from "../img/thezebralogo.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="logo"
          >
            <img src={Logo} alt="logo" />
          </Typography>

          <Button color="inherit">
            Compare
            <ArrowDropDownIcon />
          </Button>

          <Button color="inherit">
            Tool &#38; Tips
            <ArrowDropDownIcon />
          </Button>

          <Button color="inherit">
            Company
            <ArrowDropDownIcon />
          </Button>

          <Button color="inherit">
            <PersonOutlineIcon />
            Login
          </Button>

          <Button color="inherit">
            <AddIcCallIcon />
            +234567234
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
