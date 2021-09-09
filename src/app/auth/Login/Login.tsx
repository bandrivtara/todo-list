import React from 'react';

export const Login = () => {
    return (
        <div className="login-container form-container">
            <h2>Login</h2>
            <div className="input-group">
                <input className="text-input" type="text" placeholder="Email or Username"/>
                <input className="text-input" type="text" placeholder="Password"/>
            </div>
            <button className="btn">
                <a href="">
                    Login
                </a>
            </button>
            <p>or</p>
            <button className="btn-create-account">
                <a href="">create an account</a>
            </button>
        </div>
    );
};
