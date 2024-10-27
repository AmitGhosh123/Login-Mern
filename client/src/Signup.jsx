import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; //to post the data to mongo db 
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name,setName] = useState() //to store the value of name 
    const [email,setEmail] = useState()
    const [password,setpassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password}) //axios posting the data values.
        .then(result => {console.log(result)
        navigate('/login')

        }) //if recieved showing the values
        .catch(err => console.log(err))      //if not then showing the error
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
        <div className="col-md-6">
            <h2 className="text-center">Sign Up</h2>
            <form className="shadow p-4 rounded"   onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </div>  

                
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>

                
            </form>
            <div>
    <Link to="/Login" button  type="submit" className="btn btn-primary btn-block ">Login</Link> </div>
    </div> 
        </div>
    );
};

export default Signup;