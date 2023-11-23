import React, {FC, SyntheticEvent, useState} from 'react';
import {RegisterFormProps} from "../../Interface/Auth";
import {IoEye, IoEyeOff} from "react-icons/io5";
import {authLR} from "../../http/userApi";
import {observer} from "mobx-react-lite";

const RegisterForm: FC<RegisterFormProps> = observer(({onRegister ,onLoginClick }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)
    const [showRePassword, setReShowPassword] = useState(false)

    const [isActive, setIsActive] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const toggleShowRePassword = () => {
        setReShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const handleRegister = async (e: SyntheticEvent) => {
        e.preventDefault()

        if(password !== repassword){
            setIsActive(true)
            return
        }

        const loginData = {
            name: name,
            email: email,
            password: password,
        };

        try {
            let users = await authLR('POST','api/register', loginData)
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error('Error during login:', error);
                });
        }
        catch (e){
            console.error('Error during login:', e);
        }

        onRegister();
    }

    return (
        <div>
            <h5 className={`typography_h5`}>Зарегистрировать аккаунт</h5>
            <form className={`login-form`}>

                <div className={`input-outline-root`}>
                    <div className={`input__auth`}>
                        <input
                            className={`login_input-label`}
                            placeholder={`Name`}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    {/*<p className={`input-form-help`}></p>*/}
                </div>

                <div className={`input-outline-root`}>
                    <div className={`input__auth`}>
                        <input
                            className={`login_input-label`}
                            placeholder={`Email`}
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        <p className={isActive ? 'input-form-help': 'input-form-help error' }/>
                    </div>
                </div>

                <div className={`input-outline-root`}>
                    <div className={`input__auth`}>
                        <input
                            className={`login_input-label`}
                            placeholder={`Password`}
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>

                        <span className={`password-toggle`} onClick={toggleShowPassword}>
                            {showPassword ? <IoEyeOff /> : <IoEye />}
                        </span>
                    </div>
                    {/*<p className={`input-form-help`}/>*/}
                </div>

                <div className={`input-outline-root`}>
                    <div className={`input__auth`}>
                        <input
                            className={`login_input-label`}
                            placeholder={`Re Password`}
                            type={showRePassword ? 'text' : 'password'}
                            value={repassword}
                            onChange={(e) => setRePassword(e.target.value)}/>

                        <span className={`password-toggle`} onClick={toggleShowRePassword}>
                            {showRePassword ? <IoEyeOff /> : <IoEye />}
                        </span>
                    </div>
                    {/*<p className={`input-form-help`}/>*/}
                </div>

                <button onClick={(e) => handleRegister(e)} className="login-form-button button_button-cisl">
                    <span className={`login_button_label`}>Регистрация</span>
                </button>
            </form>

            <p className={`p-fz tz`}>Уже есть аккаунт?</p>
            <p className={`p-fz typography_color-primary th`} onClick={onLoginClick}>
                <span className="pe">Войти</span>
            </p>
        </div>
    );
});

export default RegisterForm;