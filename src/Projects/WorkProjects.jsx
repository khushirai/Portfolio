import React, { useEffect, useState } from "react";
import {
    makeStyles,
    Grid,
    Button,
    Link,
    CircularProgress,
    Typography
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {Link as RouterLink}  from "react-router-dom";
import { Projects } from "./Projects";

const useStyles = makeStyles({
    WorkImages: {
        margin: "10rem"
    },
    body:{
        margin:"2rem ",
        textAlign:"left"
    },
    body1:{
        marginLeft:"2rem",
        textAlign:"left",
    },
    date:{
        fontSize:"100%",
        textAlign:"center"
    },
    header:{
        textAlign:"center"
    },
    buttonLink:{
        fontSize:"25px"
    },
    button:{
        marginTop:"50px",
        fontSize:"50px",  
        boxShadow:"none",
        "&:hover": {
            boxShadow: "none",
            transition: ".25s ease-in-out",
            backgroundColor: "transparent",
        }
    }
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

    const getProject = id => {
        const index = Projects.findIndex(
            workProject => workProject.slug === id
        );
        setWorkProject(Projects[index]);
        setNextProject(index + 1);
        setPrevProject(index - 1);
    };

    return (
        <div className={classes.WorkImages}>
            {workProject ? (
                <div className={classes.header}>
                    <Typography  variant="h1">{workProject.name}</Typography>
                    <Typography className={classes.body} variant='body1'>{workProject.description}</Typography>
                    <Typography className={classes.body1} variant='body1'>{workProject.summary}</Typography>
                    <a href={workProject.link}><Button variant="contained" color="primary" className={classes.buttonLink}>Link to the website</Button></a>

                    <Grid container justify="space-between">
                        <Grid item xs={6}>
                            {prevProject >= 0 ? (
                                <Link underline="none"
                                    to={`/project/${Projects[prevProject].slug}`} component={RouterLink}
                                >
                                    <Button className={classes.button}
                                        size="large"
                                        color="primary"
                                    >
                                        <ArrowBackIosIcon />
                                        Previous
                                    </Button>
                                </Link>
                            ) : null}
                        </Grid>
                        <Grid item xs={6}>
                            {Projects.length > nextProject ? (
                                <Link underline="none"
                                    to={`/project/${Projects[nextProject].slug}`}  component={RouterLink}
                                >
                                    <Button className={classes.button}    
                                        size="large"
                                        color="primary"
                                    >    
                                        Next
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
