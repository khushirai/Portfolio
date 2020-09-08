import React from "react";
import {
    Typography,
    makeStyles
} from "@material-ui/core";
import { Form } from "../Form/Form";


const useStyles = makeStyles({
    heading: {
        margin: "2rem",
        fontWeight: 400,
    },
    header: {
        margin: "30px",
    },
    
    icon: {
        color: "#fff",
    },
    button: {
        boxShadow: "none",
        "&:hover": {
            boxShadow: "none",
            transition: ".25s ease-in-out",
            backgroundColor: "transparent",
        },
    },
});

export function Contact() {
    const classes = useStyles();
    return (
        <div>
                <Typography className={classes.header} variant="h4">Contact Me</Typography>
                <Typography className={classes.heading} variant="h6">
                    If you have a question or wanna talk about the project,
                    please complete the following form.
                </Typography>    
                <Form />       
        </div>
    );
}
