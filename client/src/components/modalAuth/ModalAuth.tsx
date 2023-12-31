import React, {FC, useEffect, useRef, useState} from 'react';
import LoginForm from "../loginForm/LoginForm";
import './style.scss'
import RegisterForm from "../loginForm/RegisterForm";
import {ModalAuthProps} from "../../Interface/Auth";

const ModalAuth: FC<ModalAuthProps> = ({ onClose }) => {
    const [isLoginFormVisible, setLoginFormVisible] = useState(true);

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleLogin = () => {
        onClose();
    };

    const handleRegister = () => {

    };

    const toggleForm = () => {
        setLoginFormVisible(!isLoginFormVisible);
    };

    return (
        <div className={`flex items-center dialog-container login-form-container scroll-paper`} ref={modalRef}>
            <div className={`container-login`}>
                {isLoginFormVisible
                    ? (<LoginForm onLogin={handleLogin} onRegisterClick={toggleForm} />)
                    : ( <RegisterForm onRegister={handleRegister} onLoginClick={toggleForm} />)
                }
            </div>
        </div>
    );
};

export default ModalAuth;