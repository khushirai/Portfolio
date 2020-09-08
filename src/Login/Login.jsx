import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { post } from 'axios';
import {
    Button,
    TextField,
    Grid,
    makeStyles,
    Typography,
    FormControlLabel,
    Checkbox,
    Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles({
    header: {
        margin: "30px 0px 0px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        margin: "10px 0px 10px 0px",
    },
    body1: {
        marginBottom: "150px",
    },
});


export function Login() {
    const classes = useStyles();
    let history = useHistory();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const updateFormData = (event, prop) => {
        setFormData({ ...formData, [prop] : event.target.value })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        post('http://localhost:5000/users/login', formData)
        .then(res => {
            console.log(res.data);
            history.push('/');
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <Container maxWidth="xs">
            <div className={classes.header}>
                <LockOutlinedIcon />
                <Typography variant="h5">Sign in</Typography>
            </div>
            <form autoComplete="on" onSubmit={onFormSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={formData.email}
                    onChange={(event) => updateFormData(event, "email")}
                    id="email"
                    label="Email"
                    name="email"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={formData.password}
                    onChange={(event) => updateFormData(event, "password")}
                    label="Password"
                    type="password"
                    id="password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Typography className={classes.body1} variant="body1">
                            Forgot password?
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
