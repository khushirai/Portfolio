import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar, Link, Grid, IconButton } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { useStore } from "../contexts/theme-context";

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
        fontSize: "20px",
    },
    link: {
        margin: ".5rem",
    },
}));

export function Navbar() {
    const classes = useStyles();
    const { darkMode, setDarkMode } = useStore();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid>
                        <Link underline="none" color="inherit" to="/">
                            <Typography variant="h6" className={classes.title}>
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
                    <IconButton
                        color="inherit"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
