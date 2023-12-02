import React, {FC, SyntheticEvent, useContext, useEffect, useState} from 'react';
import {LoginFormProps} from "../../Interface/Auth";
import './style.scss'
import { IoEye, IoEyeOff } from 'react-icons/io5';
import {authLR} from "../../http/userApi";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm:FC<LoginFormProps> = observer(({ onLogin, onRegisterClick }) => {
    const {user} = useContext(Context)

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleLogin = async (values: any) => {
        try{
            const loginData = {
                email: values.email,
                password: values.password,
            };

            if((loginData.email && loginData.password) == ''){
                return
            }

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

        } catch (e){
            console.error('Error during login:', e);
        }

    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    });

    return (
        <div>
            <h5 className={`typography_h5`}>Войти в аккаунт</h5>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {() => (
                    <form className={`auth-form`}>
                        <div className={`auth-input__outline-root`}>
                            <div className={`input__auth`}>
                                <Field
                                    className={`login_input-label`}
                                    placeholder={`Email`}
                                    type="text"
                                    name="email"
                                />
                            </div>
                            <ErrorMessage name="email" component="div" className={`input-form-help`}/>
                        </div>

                        <div className={`auth-input__outline-root`}>
                            <div className={`input__auth`}>
                                <Field
                                    className={`login_input-label`}
                                    placeholder={`Password`}
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                />
                                <span className={`password-toggle`} onClick={toggleShowPassword}>{showPassword ? <IoEyeOff /> : <IoEye />}</span>
                            </div>
                            <ErrorMessage name="password" component="div" className={`input-form-help`}/>
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
                )}
            </Formik>

            <p className={`p-fz tz`}>Нет учетной записи</p>
            <p className={`p-fz typography_color-primary th`} onClick={onRegisterClick}>
                <span className="pe">Зарегистрироваться</span>
            </p>
        </div>
    );
});

export default LoginForm;