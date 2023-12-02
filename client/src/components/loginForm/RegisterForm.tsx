import React, {FC, SyntheticEvent, useState} from 'react';
import {RegisterFormProps} from "../../Interface/Auth";
import {IoEye, IoEyeOff} from "react-icons/io5";
import {authLR} from "../../http/userApi";
import {observer} from "mobx-react-lite";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterForm: FC<RegisterFormProps> = observer(({onRegister ,onLoginClick }) => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        repassword: '',
    };

    const [isActive, setIsActive] = useState(false)

    const [showPassword, setShowPassword] = useState(false)
    const [showRePassword, setReShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const toggleShowRePassword = () => {
        setReShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const handleRegister = async (values: any) => {
        const { name, email, password } = values;

        try {
            const loginData = {
                name: name,
                email: email,
                password: password,
            };

            if((loginData.name && loginData.email && loginData.password) != ''){

                let users = await authLR('POST','api/register', loginData)
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => {
                        console.error('Error during registration:', error);
                    });

                onRegister();

            }else{
                return
            }
        }
        catch (e){
            console.error('Error during registration:', e);
        }
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        repassword: Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
            .required('Required'),
    });

    return (
        <div>
            <h5 className={`typography_h5`}>Зарегистрировать аккаунт</h5>
            <Formik
                initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleRegister}
            >
                {() => (
                    <form className={`auth-form`}>

                        <div className={`auth-input__outline-root`}>
                            <div className={`input__auth`}>
                                <Field
                                    className={`login_input-label`}
                                    placeholder={`Name`}
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <ErrorMessage name="name" component="p" className="input-form-help" />
                        </div>

                        <div className={`auth-input__outline-root`}>
                            <div className={`input__auth`}>
                                <Field
                                    className={`login_input-label`}
                                    placeholder={`Email`}
                                    type="text"
                                    name="email"
                                />
                                <p className={isActive ? 'input-form-help': 'input-form-help error' }/>
                            </div>
                            <ErrorMessage name="email" component="p" className="input-form-help" />
                        </div>

                        <div className={`auth-input__outline-root`}>
                            <div className={`input__auth`}>
                                <Field
                                    className={`login_input-label`}
                                    placeholder={`Password`}
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                />

                                <span className={`password-toggle`} onClick={toggleShowPassword}>
                                    {showPassword ? <IoEyeOff /> : <IoEye />}
                                </span>
                            </div>
                            <ErrorMessage name="password" component="p" className="input-form-help" />
                        </div>

                        <div className={`auth-input__outline-root`}>
                            <div className={`input__auth`}>
                                <Field
                                    className={`login_input-label`}
                                    placeholder={`Re Password`}
                                    type={showRePassword ? 'text' : 'password'}
                                    name="repassword"
                                />
                                <span className={`password-toggle`} onClick={toggleShowRePassword}>
                                    {showRePassword ? <IoEyeOff /> : <IoEye />}
                                </span>
                            </div>

                            <ErrorMessage name="repassword" component="p" className="input-form-help" />
                        </div>

                        <button onClick={(e) => handleRegister(e)} className="login-form-button button_button-cisl">
                            <span className={`login_button_label`}>Регистрация</span>
                        </button>
                    </form>
                )}
            </Formik>

            <p className={`p-fz tz`}>Уже есть аккаунт?</p>
            <p className={`p-fz typography_color-primary th`} onClick={onLoginClick}>
                <span className="pe">Войти</span>
            </p>
        </div>
    );
});

export default RegisterForm;