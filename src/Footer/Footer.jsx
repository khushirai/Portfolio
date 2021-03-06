import React from "react";
import { Typography, makeStyles, Button, Grid, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles({
    footnote: {
        fontSize: "20px",
        textAlign: "left",
    }, 
    footerColor: {
        backgroundColor: "#000"
  },
    text: {
        marginLeft: "10rem",
    },
    AllIcons: {
        display: "flex",
        justifyContent: "flex-end",
        flexGrow: 1,
        marginRight:"10rem"
    },
    icon: {
        color: "#fff",
    },
    header: {
        color:"#ff4",

        marginBottom: "2rem",
        marginTop: "2rem",
    },
    footerText:{
        textAlign:"center",
        marginTop:"2rem"
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

export function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footerColor} >
        <Grid container xs={4} sm={6} md={8} lg={12}>
            <Grid item  className={classes.text}>
                <Typography className={classes.header} variant="h5">
                    Explore
                </Typography>
                <Link underline="none" to="/about" component={RouterLink}>
                    <Typography variant="h6">About</Typography>
                </Link>
                <Link underline="none" to="/project" component={RouterLink}>
                    <Typography variant="h6">Projects</Typography>
                </Link>
                <Link underline="none" to="/contact" component={RouterLink}>
                    <Typography variant="h6">Contact</Typography>
                </Link>
            </Grid>
            <Grid item className={classes.AllIcons}>
                <Button className={classes.button} size="large">
                    <a
                        className={classes.icon}
                        href="mailto:dev.khushirai@gmail.com"
                    >
                        <EmailIcon />
                    </a>
                </Button>
                <Button className={classes.button} size="large">
                    <a
                        className={classes.icon}
                        href="https://www.linkedin.com/in/khushirai2020"
                    >
                        <LinkedInIcon />
                    </a>
                </Button>
                <Button className={classes.button} size="large">
                    <a
                        className={classes.icon}
                        href="https://github.com/khushirai"
                    >
                        <GitHubIcon />
                    </a>
                </Button>
                <Button className={classes.button} size="large">
                    <a
                        className={classes.icon}
                        href="https://www.twitter.com/khushir12286505"
                    >
                        <TwitterIcon />
                    </a>
                </Button>
            </Grid>
        </Grid>
        <Typography className={classes.footerText} variant="h6">Copyright &#169; 2020. All rights reserved</Typography>
        </div>
    );
}
