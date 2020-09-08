import React from "react";
import {
    CardMedia,
    Link,
    Typography,
    makeStyles,
    Card,
    CardContent,
    } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import "./workStyle.css";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        borderRadius: "4px",
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: "none",
        border: "1px solid #DFE3EA",
        "&:hover": {
            boxShadow:
                "0 0 6px rgba(108,127,148,0.1), 0 10px 10px rgba(108,127,148,0.1)",
            transform: "translateY(-10px)",
            transition: "transform ease 750ms, box-shadow ease 750ms",
        },
    },
    text:{
        textAlign:"center"
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export function WorkProject({ alt, src, slug, name }) {
    const classes = useStyles();

    return (
        <div className="container">
            <Link underline="none" href={`/project/${slug}`}>
                <Card className={classes.root} >
                    <CardMedia
                        height='250'
                        alt={alt}
                        src={src}
                        component="img"
                    />
                    <CardContent>
                       <Typography className={classes.text} variant="h5">{name}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
}
