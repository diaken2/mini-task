import axios from 'axios'
import { useState } from 'react'
import { ICriteria } from '../../types/types'
import { validationSchema } from './validationCriteries/validationCriteries'
import useShowErrorAlert from "../useShowErrorAlert/useShowErrorAlert"
let controller:any;
const useSearchRequest = () => {
    
    const [foundUsers, setFoundUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { closeErrorAlert, resetFrontValidationErrors, openErrorAlert, setFrontValidationErrors, errorsValidation, isErrorVisible, errorMessage } = useShowErrorAlert()
    const sendSearchRequest = async (email: string, num: string) => {
        if (controller) {
            controller.abort();
            console.log("Download aborted");
          }
        controller = new AbortController();
        const signal = controller.signal;
        setFoundUsers([])
        closeErrorAlert()
        setFrontValidationErrors({})
        const numWithoutDash = num.split('-').join('')
        const searchCriteries: ICriteria = {
            email, num: numWithoutDash
        }
        try {
            setIsLoading(true)
            resetFrontValidationErrors()
            await validationSchema.validate(searchCriteries, { abortEarly: false });
            const sendRequest = await axios.post('/api/search', searchCriteries,{
                signal
            })
            const errorMessage = sendRequest.data.message
            if (!!errorMessage) {
                openErrorAlert(errorMessage)
                setIsLoading(false)
                return
            }
            setIsLoading(false)
            const foundedUsers = sendRequest.data
            setFoundUsers(foundedUsers)


        } catch (error: any) {
            if (error.message==='canceled'){
                return
            }
            setIsLoading(false)
            openErrorAlert(error.message)
            setFrontValidationErrors(error)

        }
    }
    return { sendSearchRequest, errorsValidation, isErrorVisible, errorMessage, closeErrorAlert, foundUsers, isLoading }
}
export default useSearchRequest