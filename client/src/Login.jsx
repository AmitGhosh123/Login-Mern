import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; //to post the data to mongo db 
import { useNavigate } from 'react-router-dom';


function Login () {
     
    const [email,setEmail] = useState()//to store the value of name 
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password }) // axios posting the data values.
            .then(result => {
                console.log(result.data);
                if (result.data.status === "Success") {
                    navigate('/home');
                } else {
                    alert(result.data.message); // Show an alert with the error message
                }
            })
            .catch(err => console.log(err)); // If there is a server error, show it in the console
    };


    return (
        <div className="container mt-5 d-flex justify-content-center">
        <div>
            <h2 className="text-center">Login</h2>
            <form className="shadow p-4 rounded" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>  
                
                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
            <div className="mt-3">
                <Link to="/SignUp" className="btn btn-secondary btn-block">Sign Up</Link>
            </div>
        </div>
    </div>
    );
};

export default Login;