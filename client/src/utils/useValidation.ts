import {useCallback, useEffect, useState} from "react";

export const useValidation = (value: any, validations: any) => {
    const [errors, setErrors] = useState({
        minLengthErrorMsg: '',
        maxLengthErrorMsg: '',
        emptyErrorMsg: '',
        emailErrorMsg: '',
    });

    const validate = () => {
        let errorsObj = { ...errors };
        let inputValid = true;

        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    if (value.length < validations[validation]) {
                        errorsObj.minLengthErrorMsg = 'Минимальная длина не достигнута';
                        inputValid = false;
                    } else {
                        errorsObj.minLengthErrorMsg = '';
                    }
                    break;
                case 'maxLength':
                    if (value.length > validations[validation]) {
                        errorsObj.maxLengthErrorMsg = 'Максимальная длина превышена';
                        inputValid = false;
                    } else {
                        errorsObj.maxLengthErrorMsg = '';
                    }
                    break;
                case 'isEmpty':
                    if (!value) {
                        errorsObj.emptyErrorMsg = 'Поле не может быть пустым';
                        inputValid = false;
                    } else {
                        errorsObj.emptyErrorMsg = '';
                    }
                    break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if (!re.test(String(value).toLowerCase())) {
                        errorsObj.emailErrorMsg = 'Введите корректный email';
                        inputValid = false;
                    } else {
                        errorsObj.emailErrorMsg = '';
                    }
                    break;
                default:
                    break;
            }
        }

        setErrors(errorsObj);
        return inputValid;
    };

    return {
        errors,
        validate,
    };
}