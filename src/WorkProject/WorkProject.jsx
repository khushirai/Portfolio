import React from "react";
import {
    CardMedia,
    Link,
    Typography,
    makeStyles,
    Button,
} from "@material-ui/core";
import './workStyle.css'

const useStyles = makeStyles({
    
});

export function WorkProject({ alt, src, slug }) {
    const classes = useStyles();
    return (
        <div className='container'>
            <Link underline="none" href={`/project/${slug}`}>
                <CardMedia   alt={alt} src={src} component="img" height="400px" />
                <div className='overlay'>
                    <Typography className='text' variant="h4">
                        {alt}
                    </Typography>
                </div>
            </Link>
        </div>
    );
}
