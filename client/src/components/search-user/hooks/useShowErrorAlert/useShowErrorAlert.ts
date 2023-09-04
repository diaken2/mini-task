import { useState } from 'react'
import { ValidationError } from 'yup';
import { ErrorMessages } from '../../types/types';
const useShowErrorAlert = () => {
    const [isErrorVisible, setIsErrorVisible] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [errorsValidation, setErrorsValidation] = useState<ErrorMessages>({});


    const closeErrorAlert = () => {
        setIsErrorVisible(false)
    }

    const openErrorAlert = (message: string) => {
        setIsErrorVisible(true)
        setErrorMessage(message)
    }
    const resetFrontValidationErrors = () => {
        setErrorsValidation({})
    }
    const setFrontValidationErrors = (error: any) => {
        if (!error.inner) {
            return
        }

        const newErrors: ErrorMessages = {};
        error.inner.forEach((err: ValidationError) => {
            const { path, message } = err
            if (typeof path === "string") {
                newErrors[path] = message;
            }
        });
        setErrorsValidation(newErrors);
    }

    return { closeErrorAlert, resetFrontValidationErrors, openErrorAlert, isErrorVisible, errorMessage, setFrontValidationErrors, errorsValidation }
}
export default useShowErrorAlert