import React, { useState } from "react";
import {
    CardMedia,
    Link,
    Typography,
    makeStyles,
    Grid,
    Card,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
} from "@material-ui/core";
import clsx from "clsx";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
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

export function WorkProject({ alt, src, slug }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="container">
            <Link underline="none" href={`/project/${slug}`}>
                <Card
                    className={classes.root}
                    onMouseEnter={() => setExpanded(true)}
                    onMouseLeave={() => setExpanded(false)}
                >
                    <CardMedia
                        height='200'
                        alt={alt}
                        src={src}
                        component="img"
                    />
                    <CardContent>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until
                                simmering, add saffron and set aside for 10
                                minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a
                                large, deep skillet over medium-high heat. Add
                                chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8
                                minutes. Transfer shrimp to a large plate and
                                set aside, leaving chicken and chorizo in the
                                pan. Add pimentón, bay leaves, garlic, tomatoes,
                                onion, salt and pepper, and cook, stirring often
                                until thickened and fragrant, about 10 minutes.
                                Add saffron broth and remaining 4 1/2 cups
                                chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top
                                with artichokes and peppers, and cook without
                                stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add
                                reserved shrimp and mussels, tucking them down
                                into the rice, and cook again without stirring,
                                until mussels have opened and rice is just
                                tender, 5 to 7 minutes more. (Discard any
                                mussels that don’t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10
                                minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Link>
        </div>
    );
}
