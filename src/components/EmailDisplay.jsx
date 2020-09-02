import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import "../App.css";

const EmailDisplay = () => {
  return (
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Paper id="emailPaper" elevation={3} centered={true} />
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default EmailDisplay;
