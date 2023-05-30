import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { login } from "../Redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axiosa";
import { USER_LOGIN_SUCCESS } from "../Redux/constants/userConstants";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const UserLogin = useSelector((state) => state.UserLogin);
    const { loading, error, userInfo } = UserLogin;
    const [toggle, settoggle] = useState(false);
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
        try {
            const { data } = await axios.post("/api/users/login", { email, password });
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
            navigate('/');
        } catch (error) {
            toast.error(error.response.data.message)
        }
    };



    return (
        <>
            <div
                className="card shadow mx-auto"
                style={{
                    maxWidth: "380px",
                    marginTop: "100px",
                }}
            >
                <div className="card-body">
                    <h4 className="card-title mb-4 text-center"> Sign in </h4>{" "}
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <input
                                className="form-control"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>{" "}
                        <div className="mb-3">
                            <input
                                className="form-control"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="btn btn-primary w-100">
                                Login{" "}
                            </button>{" "}
                        </div>{" "}
                    </form>{" "}
                </div>{" "}
            </div>{" "}
        </>
    );
};

export default Login;
