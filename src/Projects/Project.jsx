import React from "react";
import {
    makeStyles,
    Grid
} from "@material-ui/core";
import { Projects } from "./Projects";
import { WorkProject } from "../WorkProject/WorkProject";

const useStyles = makeStyles({
    WorkImages: {
        margin: "10rem"
    }
});

export function Project() {
    const classes = useStyles();

    return (
        <div className={classes.WorkImages}>
                    <Grid container spacing={4} >
                        {Projects.map(({ name, src, alt, slug, link }, index) => {
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    md={8}
                                    lg={4}
                                    key={index + name}
                                >
                                    <WorkProject
                                        name={name}
                                        src={src}
                                        alt={alt}
                                        slug={slug}
                                        link={link}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>             
        </div>
    );
}
