import React, { useEffect, useState } from "react";
import {
    makeStyles,
    Grid,
    Button,
    Link,
    CircularProgress,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link as RouterLink } from "react-router-dom";
import { Projects } from "./Projects";


const useStyles = makeStyles({
    WorkImages: {
        margin: "10rem",
    },
    body: {
        margin: "2rem ",
        textAlign: "left",
        fontWeight:"bold",
        fontFamily:'Segoe UI',
        color:"#78244c"
    },
    heading:{
        color:"#116466"
    },
    body1: {
        marginLeft: "2rem",
        marginBottom:"100px",
        textAlign: "left",
        fontFamily:'Segoe UI'
    },
    date: {
        fontSize: "100%",
        textAlign: "center",
    },
    header: {
        textAlign: "center",
        fontFamily:'Segoe UI'
    },
    buttonLink: {
        fontSize: "25px",
        marginTop:"90px",
    },
    anchor:{
        textDecoration:"none"
    },
    image:{
        height:"400px",
      
    },
    button: {
        marginTop: "50px",
        fontSize: "50px",
        boxShadow: "none",
        "&:hover": {
            boxShadow: "none",
            transition: ".25s ease-in-out",
            backgroundColor: "transparent",
        },
    },
});

export function WorkProjects() {
    const classes = useStyles();

    let param = useParams();
    const [workProject, setWorkProject] = useState(null);
    const [nextProject, setNextProject] = useState(null);
    const [prevProject, setPrevProject] = useState(null);

    useEffect(() => {
        getProject(param.id);
    }, [param.id]);

    const getProject = (id) => {
        const index = Projects.findIndex(
            (workProject) => workProject.slug === id
        );
        setWorkProject(Projects[index]);
        setNextProject(index + 1);
        setPrevProject(index - 1);
    };

    return (
        <div className={classes.WorkImages}>
            {workProject ? (
                <div className={classes.header}>
                    <Typography className={classes.heading} variant="h2">{workProject.name}</Typography>
                    <Typography className={classes.body} variant="h6" >
                        {workProject.description}
                    </Typography>
                    <Typography className={classes.body1} variant="body1">
                        {workProject.summary}
                    </Typography>
                    <Grid container spacing={4}>
                    {workProject.images.map((image, index) => {
                        return (
                            <Grid item xs={12} lg={6} key={image + index}>
                                <CardMedia
                                     className={classes.image}
                                    src={image}
                                    component="img"
                                    border="1"
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                    <a href={workProject.link} className={classes.anchor}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.buttonLink}
                        >
                            Link to the website
                        </Button>
                    </a>
                    <Grid container justify="space-between">
                        <Grid item xs={6}>
                            {prevProject >= 0 ? (
                                
                                <Link
                                    underline="none"
                                    to={`/project/${Projects[prevProject].slug}`}
                                    component={RouterLink}
                                >
                                    <Button
                                        className={classes.button}
                                        size="large"
                                        color="primary"
                                    >
                                        <ArrowBackIosIcon />
                                       <Typography variant="h4"> {Projects[prevProject].name} </Typography>
                                    </Button>
                                </Link>
                            ) : null}
                        </Grid>
                        <Grid item xs={6}>
                            {Projects.length > nextProject ? (
                                <Link
                                    underline="none"
                                    to={`/project/${Projects[nextProject].slug}`}
                                    component={RouterLink}
                                >
                                    <Button
                                        className={classes.button}
                                        size="large"
                                        color="primary"
                                    >
                                       <Typography variant="h4"> {Projects[nextProject].name} </Typography>
                                        <ArrowForwardIosIcon />
                                    </Button>
                                </Link>
                            ) : null}
                        </Grid>
                    </Grid>
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
}
