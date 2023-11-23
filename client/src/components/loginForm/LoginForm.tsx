import React, {FC, SyntheticEvent, useContext, useEffect, useState} from 'react';
import {LoginFormProps} from "../../Interface/Auth";
import './style.scss'
import { IoEye, IoEyeOff } from 'react-icons/io5';
import {authLR} from "../../http/userApi";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {useValidation} from "../../utils/useValidation";

const LoginForm:FC<LoginFormProps> = observer(({ onLogin, onRegisterClick }) => {
    const {user} = useContext(Context)
    const [showPassword, setShowPassword] = useState(false);

    const useInput = (initialValue: any, validations: any) => {
        const [value, setValue] = useState(initialValue)
        const [isDirty, setDirty] = useState(false)
        const { errorMsgs, inputValid, ...valid } = useValidation(value, validations);

        const onChange = (e: any) => {
            setValue(e.target.value)
        }

        const onBlur = () => {
            setDirty(true)
        }

        return {
            value,
            onChange,
            onBlur,
            isDirty,
            errorMsgs,
            inputValid,
            ...valid
        }
    }

    const email = useInput('',{isEmpty: true, minLenght: 3, isEmail: true});
    const password = useInput('',{isEmpty: true, minLenght: 3, maxLenght: 40});

    const errorEmailMessages = Object.values(email.errorMsgs).filter(Boolean).join(', ');
    const errorPasswordMessages = Object.values(password.errorMsgs).filter(Boolean).join(', ');

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleLogin = async (e: any) => {
        e.preventDefault()

        const loginData = {
            email: email,
            password: password,
        };

        try {
            let users = await authLR('POST','api/login', loginData)
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error('Error during login:', error);
                });

            user.setUser(users)
            user.setIsAuth(true)

            onLogin();
        }
        catch (e){
            console.error('Error during login:', e);
        }
    };

    return (
        <div>
            <h5 className={`typography_h5`}>Войти в аккаунт</h5>
            <form className={`login-form`}>
                <div className={`input-outline-root`}>
                    <div className={`input__auth`}>
                        <input
                            className={`login_input-label`}
                            placeholder={`Email`} type="text"
                            value={email.value}
                            onChange={(e) => email.onChange(e)}
                            onBlur={email.onBlur}
                        />
                    </div>

                    {(email.isDirty && errorEmailMessages) && <p className={`input-form-help`}>{errorEmailMessages}</p>}
                </div>

                <div className={`input-outline-root`}>
                    <div className={`input__auth`}>
                        <input
                            className={`login_input-label`}
                            placeholder={`Password`}
                            type={showPassword ? 'text' : 'password'}
                            value={password.value}
                            onChange={(e) => password.onChange(e)}
                            onBlur={password.onBlur}
                        />
                        <span className={`password-toggle`} onClick={toggleShowPassword}>{showPassword ? <IoEyeOff /> : <IoEye />}</span>
                    </div>
                    { (email.isDirty && errorPasswordMessages) && <p className={`input-form-help`}>{errorPasswordMessages}</p> }
                </div>

                <div className={`forgot-password etc`}>
                        <span className={`pe typography_color-primary`}>
                            Забыли пароль?
                        </span>
                </div>

                <button onClick={(e) => handleLogin(e)} className="login-form-button button_button-cisl" disabled={email.inputValid}>
                    <span className={`login_button_label`}>Войти</span>
                </button>
            </form>
            <p className={`p-fz tz`}>Нет учетной записи</p>
            <p className={`p-fz typography_color-primary th`} onClick={onRegisterClick}>
                <span className="pe">Зарегистрироваться</span>
            </p>
        </div>
    );
});

export default LoginForm;