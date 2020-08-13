import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import { Form } from "../Form/Form";

const Follow = ["Instagram", "Twitter"];

const useStyles = makeStyles({
    heading: {
        maxWidth: "50%",
        margin: "2rem",
        fontWeight: 400
      },
  table: {
    margin: "5rem 2rem",
  }
});

export function Contact() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.heading}>
        If you have a question in mind, please complete the form below to send
        your information
      </Typography>
      <Form />
    </div>
  );
}
