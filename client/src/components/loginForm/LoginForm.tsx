import React, {FC, SyntheticEvent, useContext, useState} from 'react';
import {LoginFormProps} from "../../Interface/Auth";
import './style.scss'
import { IoEye, IoEyeOff } from 'react-icons/io5';
import {login} from "../../http/userApi";
import {Context} from "../../index";

const LoginForm:FC<LoginFormProps> = ({ onLogin, onRegisterClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const {user} = useContext(Context)

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleLogin = async (e: any) => {
        e.preventDefault()
        //onLogin(email, password);

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        // let users = await login(email, password)
        // console.log(users)
        //
        // user.setUser(user)
        // user.isAuth(true)
    };

    return (
        <div>
            <h5 className={`typography_h5`}>Войти в аккаунт</h5>
            <form className={`login-form`}>
                <div className={`input-outline-root`}>
                    <input
                        className={`login_input-label`}
                        placeholder={`Email`} type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    {/*<p className={`input-form-help`}></p>*/}
                </div>

                <div className={`input-outline-root`}>
                    <input
                        className={`login_input-label`}
                        placeholder={`Password`}
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <span className={`password-toggle`} onClick={toggleShowPassword}>
                        {showPassword ? <IoEyeOff /> : <IoEye />}
                    </span>
                    {/*<p className={`input-form-help`}/>*/}
                </div>

                <div className={`forgot-password etc`}>
                        <span className={`pe typography_color-primary`}>
                            Забыли пароль?
                        </span>
                </div>

                <button onClick={(e) => handleLogin(e)} className="login-form-button button_button-cisl">
                    <span className={`login_button_label`}>Войти</span>
                </button>
            </form>
            <p className={`p-fz tz`}>Нет учетной записи</p>
            <p className={`p-fz typography_color-primary th`} onClick={onRegisterClick}>
                <span className="pe">Зарегистрироваться</span>
            </p>
        </div>
    );
};

export default LoginForm;