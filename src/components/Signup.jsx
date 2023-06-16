import React, { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import "./Signup.css";


function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/signup", {
                name, email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "notexist") {
                        navigate('/home', { state: { email: email } })
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
            <h1 className="brand">SIGN UP</h1>
            <div className="wrapper">
                <div className="company-info">


                </div>
                <div className="contact">
                    <form id="contactForm" action="POST">
                        <p>
                            <label>Name</label>
                            <input required type="text" name="text" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </p>
                        <p>
                            <label>Email Address</label>
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                        </p>
                        <p>
                            <label>Password</label>
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        </p>
                        <p class="full">
                            <button type="submit" onClick={submit}>SIGN UP</button>
                        </p>
                    </form>
                    <p className="full">
                        <Link to="/">Login Page</Link>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Login;