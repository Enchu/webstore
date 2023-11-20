import React, {FC, SyntheticEvent, useState} from 'react';
import {RegisterFormProps} from "../../Interface/Auth";
import {IoEye, IoEyeOff} from "react-icons/io5";

const RegisterForm: FC<RegisterFormProps> = ({onRegister ,onLoginClick }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const handleRegister = () => {
        onRegister(email, password);
    }

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        const response = await fetch('http://localhost:5000/api/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const content = await response.json()

        console.log(content)
    }

    return (
        <div>
            <h5 className={`typography_h5`}>Зарегистрировать аккаунт</h5>
            <form className={`login-form`}>

                <div className={`input-outline-root`}>
                    <input
                        className={`login_input-label`}
                        placeholder={`Name`}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    {/*<p className={`input-form-help`}></p>*/}
                </div>

                <div className={`input-outline-root`}>
                    <input
                        className={`login_input-label`}
                        placeholder={`Email`}
                        type="text"
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

                <div className={`input-outline-root`}>
                    <input
                        className={`login_input-label`}
                        placeholder={`Re Password`}
                        type={showPassword ? 'text' : 'password'}
                        value={repassword}
                        onChange={(e) => setRePassword(e.target.value)}/>

                    <span className={`password-toggle`} onClick={toggleShowPassword}>
                        {showPassword ? <IoEyeOff /> : <IoEye />}
                    </span>

                    {/*<p className={`input-form-help`}/>*/}
                </div>

                <button onClick={handleRegister} className="login-form-button button_button-cisl" type="submit">
                    <span className={`login_button_label`}>Регистрация</span>
                </button>
            </form>

            <p className={`p-fz tz`}>Уже есть аккаунт?</p>
            <p className={`p-fz typography_color-primary th`} onClick={onLoginClick}>
                <span className="pe">Войти</span>
            </p>
        </div>
    );
};

export default RegisterForm;