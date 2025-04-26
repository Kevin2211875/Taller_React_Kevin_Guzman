import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import './Logout.css';

const Logout = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validación básica (puedes cambiarla)
        if (username && password) {
            // Redirige a la página de Clientes
            navigate("/clientes");
        } else {
            alert("Por favor ingresa usuario y contraseña");
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                
                <div className="input-box">
                    <FaUser className="icon" />
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                </div>
                
                <div className="input-box">
                    <FaLock className="icon" />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" /> 
                        Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
                
                <button type="submit">Login</button>
                
                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default Logout;