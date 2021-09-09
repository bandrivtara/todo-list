import React from 'react';

export const Register = () => {
    return (
        <div className="register-container form-container">
            <div className="icon-box">
                <a href="">
                    <img src="./media/arrow.png" alt="arrow"/>
                </a>
            </div>
            <h2>Create an new account</h2>
            <div className="input-group">
                <input className="text-input" type="text" placeholder="Username"/>
                <input className="text-input" type="text" placeholder="Email"/>
                <input className="text-input" type="text" placeholder="Password"/>
                <input className="text-input" type="text" placeholder="Repeat password"/>
            </div>
            <button className="btn">
                <a href="">
                    Create
                </a>
            </button>
        </div>
    );
};
