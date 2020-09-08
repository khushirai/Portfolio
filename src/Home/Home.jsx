import React from "react";
import { Typography, makeStyles, Grid, Button, Link} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
    headerBackgroundHome: {
        backgroundImage: 'url("/background.jpg")',
        height: "100vh",
    },
    homeContainer: {
        height: "calc(100% - 64px)",
        alignContent: "center",
    },
    title: {
        marginBottom: "3rem",
        fontSize: "5rem",
        fontWeight: 500,
        textAlign: "center",
    },
    projectsContainer: {
        textAlign: "center",
    },
    subTitle: {
        marginBottom: "5rem",
        marginLeft: "15rem",
        marginRight: "15rem",
        textAlign:"center"
    },
    projectsButton: {
        borderRadius: 0,
        boxShadow: "none",
        padding: "1rem 2rem",
        opacity: 1,
        transition: "opacity .25s ease-in-out",
        "&:hover": {
            boxShadow: "none",
            opacity: "0.5",
            transition: "opacity .25s ease-in-out",
        },
    },
});

export function Home() {
    const classes = useStyles();

    return (
        <div className={classes.headerBackgroundHome}>
        
            <Grid container className={classes.homeContainer}>

                <Grid item xs={12}>
                    <Typography className={classes.title} variant="h1">
                        Khushi Rai
                    </Typography>
                    <Typography className={classes.subTitle} variant="h5">
                        Hi everyone, I am a front end web developer focused on
                        creating interactive and user friendly applications
                        based on the needs of client
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.projectsContainer}>
                    <Link to="/project" underline="none" component={RouterLink}>
                        <Button
                            className={classes.projectsButton}
                            variant="contained"
                        >
                            Check my work
                        </Button>
                    </Link>
                </Grid>

            </Grid>
        </div>
    );
}
