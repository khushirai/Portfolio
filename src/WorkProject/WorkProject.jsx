import React from "react";
import {
    CardMedia,
    Link,
    Typography,
    makeStyles,
    Button,
} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        "&:hover": {
        marginTop: "3rem",
        marginLeft: "8rem",
        transition: ".5s ease",
        opacity: "0",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        textAlign: "center"
      },
    }
});

export function WorkProject({ alt, src, slug }) {
    const classes = useStyles();
    return (
        <div>
            <Link underline="none" href={`/project/${slug}`}>
                <CardMedia alt={alt} src={src} component="img" height="400px" />
                <Typography className={classes.title} variant="h4">
                    {alt}
                </Typography>
            </Link>
        </div>
    );
}
