import React, {FC, useEffect, useState} from 'react';
import {AuthenticatedContentProps, LoginFormProps} from "../Interface/Auth";
import LoginForm from "../components/loginForm/LoginForm";

const AuthenticatedContent: FC<AuthenticatedContentProps> = ({ username, onLogout }) => {
    return (
        <div>
            <p>Welcome, {username}!</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

const Auth: FC = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (enteredUsername: string, enteredPassword: string) => {
        if (enteredUsername === 'user' && enteredPassword === 'password') {
            setAuthenticated(true);
            setUsername(enteredUsername);
        } else {
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setAuthenticated(false);
        setUsername('');
    };

    return (
        <div>
            {authenticated ? (
                <AuthenticatedContent username={username} onLogout={handleLogout} />
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
};

export default Auth;