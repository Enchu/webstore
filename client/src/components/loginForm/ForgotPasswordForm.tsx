import React, {FC, useState} from 'react';

const ForgotPasswordForm: FC = () => {
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        /*Добавить */
    };

    return (
        <div>
            <h5 className={`typography_h5`}>Забыли пароль</h5>
            <form className={`auth-form`}>
                <div className={`auth-input__outline-root`}>
                    <input className={`login_input-label`} placeholder={`Email`} type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    {/*<p className={`input-form-help`}></p>*/}
                </div>

                <button onClick={handleLogin} className="login-form-button button_button-cisl">
                    <span className={`login_button_label`}>Отправить письмо</span>
                </button>
            </form>
            <p className={`p-fz tz`}>Помните свой пароль</p>
            <p className={`p-fz typography_color-primary th`} > {/*onClick={onRegisterClick}*/}

                <span className="pe">Войти</span>
            </p>
        </div>
    );
};

export default ForgotPasswordForm;