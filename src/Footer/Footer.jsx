import React from "react";
import { Typography, makeStyles, Button, Grid } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
    footnote: {
        fontSize: "20px",
        textAlign: "left",
        marginLeft: "60px",
        flexGrow: 4,
    },
    footerColor: {
        backgroundColor: "#7395AE",
        marginTop:"10rem"
    },
    heading: {
        marginBottom: "1rem",
    },
    AllIcons: {
        flexGrow: 1,
        marginRight: "5px",
    },
    icon:{
            color: "#000"
        
    }
});

export function Footer() {
    const classes = useStyles();
    return (
        <Grid container className={classes.footerColor}>
            <Grid item className={classes.footnote}>
                <Typography className={classes.heading} variant="h4">
                    Khushi Rai
                </Typography>
                <Typography variant="body1">Toronto, Ontario</Typography>
                <Typography variant="body1">778-241-9289</Typography>
            </Grid>
            <Grid item className={classes.AllIcons}>
                <Button size="large">
                <a className={classes.icon} href="mailto:khushirai9596@gmail.com" > <EmailIcon/></a>
                   
                </Button>
                <Button size="large">
                    <a className={classes.icon} href="https://www.linkedin.com/in/khushirai2020">
                        <LinkedInIcon />
                    </a>
                </Button>
                <Button size="large" className={classes.icon}>
                    <GitHubIcon />
                </Button>
            </Grid>
        </Grid>
    );
}
