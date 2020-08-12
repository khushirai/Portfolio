import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = new makeStyles({
    image: {
        height:"600px",
        display: "block",
        marginTop: "50px",
        marginBottom: "50px",
        marginLeft:"auto",
        marginRight:"auto"
        
    },
    header: {
        textAlign: "center",
        margin: "5 rem",
    },
    text: {
        margin: "60px",
        fontFamily:'Segoe UI'
    },
    header4: {
        margin: "10px 60px 0px 60px",
        fontFamily:'Segoe UI'
    },
    headerText:{
        marginTop:"60px",
        marginLeft:"60px",
        fontFamily:'Segoe UI'
    }
});

export function Contact() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img
                className={classes.image}
                src="khushi.jpg"
                alt="Khushi Rai"
            ></img>
            <Grid container>
                
                    <Grid item xs={12} lg={6}>
                    <Typography className={classes.text} variant="h6">
                        Dedicated, hardworking, and passionate IT professional
                        with extensive knowledge and proficiency in HTML,
                        React.js, Angular, TypeScript, Node.js, and Cascading
                        Style Sheets. Seeking to advance a growing tech career
                        as a Front-end web developer by offering proven
                        abilities and knowledge of the tools and techniques to
                        develop interactive applications and websites based on
                        the needs of a client. Highly skilled in Front end
                        development, REST API Development, etc by deploying a
                        wide range of technologies across multiple frameworks,
                        libraries, and programming languages.
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography className={classes.headerText} variant="h5">
                        Email : dev.khushirai@gmail.com
                    </Typography>
                    <Typography className={classes.header4} variant="h5">
                        778-241-9289
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
