import React, { useState, useEffect } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import Navigation from "../components/Navigation";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();
const LoginPage = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((state) => state.UserLogin);
    const { loading = false, userInfo } = user || {};
    const navigate = useNavigate();

    const validator = () => {
        if (!email) {
            toast.warning("Email is required");
            return false;
        } else if (!password) {
            toast.warning("password is required");
            return false;
        } else {
            return true;
        }
    };
    const submitHandler = async (e) => {
        e.preventDefault();

        if (validator()) {
            dispatch(login(email, password));
        }
    };
    useEffect(() => {
        if (userInfo?.token) {
            navigate("/");
        } else {
            toast.error(userInfo);
        }
    }, [dispatch, user]);

    return (
        <>
            <Navigation />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={submitHandler}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                className={"h-[47px]"}
                            >
                                Sign In
                                {loading && (
                                    <img
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            maxWidth: "35px",
                                            marginLeft: "10px",
                                        }}
                                        src="/images/Ellipsis-2.9s-200px.svg"
                                    />
                                )}
                            </Button>
                            <Grid container>

                                <Grid item>
                                    <Link
                                        to="/signup"
                                        variant="body2"
                                        className="MuiTypography-root MuiTypography-body2 MuiLink-root MuiLink-underlineAlways css-101ca9i-MuiTypography-root-MuiLink-root"
                                    >
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </>
    );
};

export default LoginPage;
