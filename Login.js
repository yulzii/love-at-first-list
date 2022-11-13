import { DriveFileRenameOutline } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import HomeIcon from '@mui/icons-material/Home';
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css"
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            console.log('loading');
            return;
        }
        if (user) navigate("/login");
     }, [user, loading]);

    return (
        <div>
            <div className="loginDiv">
                <Header />
                <h2>Login</h2>
            </div>
            <div className="formDiv">
                    <form>
                        <label>
                            <p>Username</p>
                            <input 
                                type="text"
                                className="login_textBox"
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                                placeholder="E-mail Address" />
                        </label>
                        <label>
                            <p>Password</p>
                            <input 
                                type="password"
                                className="login_textBox"
                                value = {password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"></input>
                        </label>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
            </div>
        </div>
    )
} 

export default Login;