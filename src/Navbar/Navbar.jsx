import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Link,
    Grid,
    IconButton,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { useStore } from "../contexts/theme-context";

const Links = [
    { name: "Login", href: "/login" },
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
    image: {
        display: "block",
        height: "75px",
        width: "75px",
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: "none",
        border: "1px solid #DFE3EA",
        "&:hover": {
            // or scaleY(1.5)
            transform: "rotate(10deg)",
            transition: "transform ease 750ms, box-shadow ease 750ms"
        },
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
                        <Link
                            underline="none"
                            color="inherit"
                            to="/"
                            component={RouterLink}
                        >
                            <img
                                className={classes.image}
                                src="khushi_logo.png"
                                alt="khushi rai"
                            />
                        </Link>
                    </Grid>
                    <Grid className={classes.linksContainer}>
                        {Links.map(({ name, href }, index) => {
                            return (
                                <Link
                                    underline="none"
                                    key={index + name}
                                    href={href}
                                    color="inherit"
                                    className={classes.link}
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
