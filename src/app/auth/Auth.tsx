import React from 'react';
import {LoginContainer} from "./Login/LoginContainer";
import {RegisterContainer} from "./Register/RegisterContainer";

export const Auth = () => {
    return (
        <div className="auth-card">
            <RegisterContainer/>
        </div>
    );
};
