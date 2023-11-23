import {useEffect, useState} from "react";

export const useValidation = (value: any, validations: any) => {
    const [errors, setErrors] = useState({
        isEmpty: false,
        minLenghtError: false,
        maxLenghtError: false,
        emailError: false,
        errorMsgs: {
            minLenghtErrorMsg: '',
            maxLenghtErrorMsg: '',
            emptyErrorMsg: '',
            emailErrorMsg: '',
        },
    });

    useEffect(() => {
        const errorsObj = { ...errors };

        for (const validation in validations) {
            switch (validation){
                case 'minLenght':
                    if(value.length < validations[validation]) {
                        errorsObj.minLenghtError = true;
                        errorsObj.errorMsgs.minLenghtErrorMsg = 'Минимальная длина не достигнута';
                    }else{
                        errorsObj.minLenghtError = false;
                        errorsObj.errorMsgs.minLenghtErrorMsg = '';
                    }
                    break
                case 'maxLenght':
                    if(value.length > validations[validation]) {
                        errorsObj.maxLenghtError = true;
                        errorsObj.errorMsgs.maxLenghtErrorMsg = 'Максимальная длина превышена';
                    }else{
                        errorsObj.maxLenghtError = false;
                        errorsObj.errorMsgs.maxLenghtErrorMsg = '';
                    }
                    break
                case 'isEmpty':
                    errorsObj.isEmpty = !value;
                    errorsObj.errorMsgs.emptyErrorMsg = 'Поле не может быть пустым';
                    break
                case 'isEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    errorsObj.emailError = !re.test(String(value).toLowerCase());
                    errorsObj.errorMsgs.emailErrorMsg = 'Введите корректный email';
                    break
            }
        }

        setErrors(errorsObj);
    }, [value]);

    const inputValid = !Object.values(errors).some((error) => error);

    return {
        ...errors,
        inputValid,
    }
}