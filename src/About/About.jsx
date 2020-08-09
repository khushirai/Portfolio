import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { Skills } from "./Skills";
import { SkillProject } from "../Skills/SkillProject";

const useStyles = makeStyles({
    SkillsImages: {
        margin: "10rem",
    },
    head:{
        margin:"10rem"
    },
    h4: {
        textAlign: "center"
        },
    grid: {
        marginTop:"10 rem"
    },
});

export function About() {
    const classes = useStyles();

    return (
        <div>
        <div className={classes.head}>
        <Typography variant="body1">
        Here are the tools and technolgies, I am well versed with and i have used in my projects 
        </Typography>
        </div>
      
        <div  className={classes.SkillsImages}>
            <Grid className={classes.grid} container spacing={6}>
                {Skills.map(({ name, src, alt }, index) => {
                    return (
                        <Grid item xs={12} md={8} lg={4} key={index + name}>
                            <SkillProject name={name} src={src} alt={alt} />
                        </Grid>
                    );
                })}
            </Grid>
            </div>
        </div>
    );
}
