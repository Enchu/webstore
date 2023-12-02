import React, {useState} from "react";
import {useValidation} from "./useValidation";

export const useInput = (initialValue: any, validations: any) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const { errors, validate } = useValidation(value, validations);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const onBlur = () => {
        setDirty(true)
        validate();
    }

    const onFocus = () => {
        setDirty(false);
    };

    return {
        value,
        onChange,
        onBlur,
        onFocus,
        isDirty,
        errors,
    };
}