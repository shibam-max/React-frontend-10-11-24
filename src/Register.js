import React from "react";
import axios from "axios";

function Register () {
    // Correct initialization of state
    const [register, setRegister] = React.useState({
        name: "",
        email: "",
        password: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value // Update the value correctly
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(register);

        try{
            const response = await axios.post('http://localhost:8082/addUser', register);
            console.log(response.data);
            alert("user added successfully");
        }catch(error){
           console.log(error);
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>

                {/* Input fields */}
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="name"  // Ensure the name attribute matches the state property
                    placeholder="Enter your Name"
                    value={register.name}
                    onChange={handleChange}
                />
                <br /><br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"  // Ensure the name attribute matches the state property
                    placeholder="Enter your email"
                    value={register.email}
                    onChange={handleChange}
                />
                <br /><br />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"  // Ensure the name attribute matches the state property
                    placeholder="Enter your password"
                    value={register.password}
                    onChange={handleChange}
                />
                <br /><br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
