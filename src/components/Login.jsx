import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./Signup.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        window.location.href = "/home";
                    }
                    else if (res.data == "notexist") {
                        alert("User does not exists")
                    }
                })
                .catch(e => {
                    alert("Wrong credentials")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <div className="container">
            <h1 className="brand"><span>Log</span>in</h1>
            <div className="wrapper">
                <div className="company-info">


                </div>
                <div className="contact">
                    <form id="contactForm" action="POST">
                        <p>
                            <label>Email Address</label>
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                        </p>
                        <p>
                            <label>Password</label>
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        </p>
                        <p className="full">
                            <button type="submit" onClick={submit}>LOGIN</button>
                        </p>
                    </form>
                    <p>
                        <Link to="/signup">Signup Page</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;