import React, { useState } from "react";
import { redirect } from "react-router-dom";
import axios from 'axios';

function Login () {

 
    const [password, setPasswordValue] = useState("");
    const [userId, setUserIdValue] = useState("");

    const setPassword = (e) => {
      setPasswordValue(e.target.value);
    }

    const setUserId = (e) => {

        setUserIdValue(e.target.value);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log("this is our data "+ userId + "  "+password)

        const data = {
            "userId": userId,
            "password": password
        }

        try{
            const response = await axios.post("http://localhost:8082/loginUser", data);

            if(response.data == false){
                alert("Invalid User Id or Password");
            }
            else{
                alert("Login successfull");
            }
        }catch(error)
        {
            console.error(error);
        }

    }

    const redirectToRegister = () => {
        window.location.href = "/register";
    }


    return (
        <><h1> this is login page</h1>

        <div className="container">
            <form onSubmit={handleSubmit}>

                <label>User ID:</label>
                <input type="email" placeholder="Enter your user id"  value={userId} onChange={setUserId}/>
                <br></br>
                <br></br>
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" value={password} onChange={setPassword}/>
                <br></br>
                <br></br>

                <a onClick={redirectToRegister}>don't have an account</a>
                <button type="submit">Login</button> 



            </form>

        </div></>
    )
}

export default Login;