import React from "react";
import {
    Typography,
    makeStyles,
    Grid,
    Container,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    header: {
        textAlign: "center",
        margin: "5rem",
    },
    technolgy: {
        textAlign: "center",
    },
    interests: {
        textAlign: "center",
        margin: "5rem",
    },
    techHeader: {
        marginBottom: "4rem",
        marginTop: "4rem",
    },
    hobby: {
        marginBottom: "2rem"
    },
    aboutMe: {
        margin: "8rem",
        
    },
    techSubtitle: {
        lineHeight: "1.6",
        margin: "10px",
        fontSize: "1.4em",
        width: "600px",
        textAlign: "left",
      
    },
    hobbySubtitle: {
        lineHeight: "1.6",
        margin: "10px",
        fontSize: "1.4em",
        width: "600px",
        textAlign: "left"
        },
    box: {
        border: "3px solid blue",
        borderRadius: "15px",

    },
    image: {
        height: "350px",
        width: "350px",
        marginLeft: "3rem",
    },
    images:{
        lineHeight:"10px",
        
    }
});

export function About() {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.header} variant="h3">
                About Me
            </Typography>
            <div className={classes.aboutMe}>
                <Grid container>
                    <Grid item xs={12} md={8} lg={6}>
                        <img className={classes.image} src="khushi.jpg" alt="khushi rai" />
                    </Grid>
                    <Grid item xs={12} md={8} lg={6}>
                        <Typography
                            className={classes.techSubtitle}
                            variant="body1"
                        >
                            Dedicated, hardworking, and passionate IT
                            professional with extensive knowledge and
                            proficiency in HTML, React.js, Angular, TypeScript,
                            Node.js, and Cascading Style Sheets. Seeking to
                            advance a growing tech career as a Front-end web
                            developer by offering proven abilities and knowledge
                            of the tools and techniques to develop interactive
                            applications and websites based on the needs of a
                            client. Highly skilled in Front end development,
                            REST API Development, etc. by deploying a wide range
                            of technologies across multiple frameworks,
                            libraries, and programming languages.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.technolgy}>
                <Typography className={classes.techHeader} variant="h4">
                    Technologies I have worked with
                </Typography>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8} lg={6}>
                            <Box
                                className={classes.box}
                                fontSize={{
                                    xs: "h7.fontSize",
                                    sm: "h6.fontSize",
                                    md: "h5.fontSize",
                                }}
                                p={{ xs: 2, sm: 3, md: 4 }}
                            >
                            <div className={classes.images}>  
                            <img src="angular.png" alt="angular" height="80px" />
                            <img src="css.png" alt="css" height="80px" />
                            <img src="graphql.png" alt="graphql" height="80px" />
                            <img src="react.png" alt="react" height="80px" />
                            <img src="html.png" alt="html" height="80px" />
                            <img src="material-UI.png" alt="materialUI" height="80px" />
                            </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8} lg={6}>
                            <Box
                                className={classes.box}
                                fontSize={{
                                    xs: "h7.fontSize",
                                    sm: "h6.fontSize",
                                    md: "h5.fontSize",
                                }}
                                p={{ xs: 2, sm: 3, md: 4 }}
                            >
                              <img src="node.png" alt="node" height="80px" />
                              <img src="sql.png" alt="sql" height="80px" />
                              <img src="mongoDB.jpg" alt="mongoDB" height="80px" />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8} lg={6}>
                            <Box
                                className={classes.box}
                                fontSize={{
                                    xs: "h7.fontSize",
                                    sm: "h6.fontSize",
                                    md: "h5.fontSize",
                                }}
                                p={{ xs: 2, sm: 3, md: 4 }}
                            >
                            <img src="javascript.png" alt="javascript" height="80px" />
                            <img src="typescript.png" alt="typescript" height="80px" />
                            <img src="java.png" alt="java" height="80px" />
                            <img src="c++.png" alt="c++" height="80px" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8} lg={6}>
                            <Box
                                className={classes.box}
                                fontSize={{
                                    xs: "h7.fontSize",
                                    sm: "h6.fontSize",
                                    md: "h5.fontSize",
                                }}
                                p={{ xs: 2, sm: 3, md: 4 }}
                            >
                               
                               <img src="vsCode.png" alt="vscode" height="80px" />
                               <img src="postman.png" alt="postman" height="80px" />
                               <img src="eclipse.png" alt="eclipse" height="80px" />
                               
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={classes.interests}>
                <Typography className={classes.hobby} variant="h4">
                    Hobbies & Interests
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8} lg={6}>
                        <img src="hobbies.jfif" alt="hobbies" height="200px" />
                    </Grid>
                    <Grid item xs={12} md={8} lg={6}>
                        <Typography
                            className={classes.hobbySubtitle}
                            variant="body1"
                        >
                            Besides my passion for coding, I love to travel and
                            do photography by capturing all the moments. I am an
                            extrovert and love to party. I like to play various
                            sports such as badminton, table tennis and chess. In
                            my free time, i love to watch movies and shows.
                            Also, i am always keen to learn new things, so every
                            weekend i try to make new recipes and cook my
                            faviourte dishes. I am a fitness freak and i love to
                            spend time working out in gym.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
