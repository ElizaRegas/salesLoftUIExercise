import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo from "../images/E.MailLogo.png";
import SearchBar from "./SearchBar";
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const TopNavbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <img id="logoImage" src={logo} alt="Logo" />;
        </Grid>
        <Grid item xs={6}>
          <SearchBar />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default TopNavbar;
