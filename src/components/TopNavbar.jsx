import React from "react";
import Grid from "@material-ui/core/Grid";
import logo from "../images/E.MailLogo.png";
import SearchBar from "./SearchBar";
import "../App.css";

const TopNavbar = () => {

  return (
    <Grid container>
      <Grid item xs={3}>
        <img id="logoImage" src={logo} alt="Logo" />;
      </Grid>
      <Grid item xs={6} id="searchBar">
        <SearchBar />
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default TopNavbar;
