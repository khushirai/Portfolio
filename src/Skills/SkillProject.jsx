import React from 'react'
import { CardMedia, Typography, makeStyles } from '@material-ui/core'

const useStyles=makeStyles({
      title:{
            marginTop:"3rem",
            marginLeft:"8rem"
      }
})
export function SkillProject({alt,src}) {
    const classes=useStyles();
    return (
        <div>
            <CardMedia alt={alt} src={src} component="img" height="250px" width="250px"/>
        </div>
    );
}