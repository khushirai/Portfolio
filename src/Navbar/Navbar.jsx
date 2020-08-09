import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar, Link, Grid } from "@material-ui/core";

const Links = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#51e2f5",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginRight: "1rem",
    },
    linksContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexGrow: 1,
        fontSize:"20px"
    },
    link: {
        margin: ".5rem",
    },
}));

export function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>  
                            <Grid>
                                <Link underline="none" color="inherit" to="/">
                                    <Typography
                                        variant="h6"
                                        className={classes.title}
                                    >
                                        Khushi Rai
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid className={classes.linksContainer}>
                                {Links.map(({ name, href }, index) => {
                                    return (
                                        <Link
                                            key={index + name}
                                            href={href}
                                            color="inherit"
                                            className={classes.link}
                                            underline="none"
                                        >
                                            {name}
                                        </Link>
                                    );
                                })}
                            </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
