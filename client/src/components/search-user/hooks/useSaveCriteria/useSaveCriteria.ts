import { ChangeEvent, useState } from 'react'
import { ICriteria } from '../../types/types'
const useSaveCriteria = () => {
    const [userSearchCriteria, setUserSearchCriteria] = useState<ICriteria>({ email: "", num: "" });


    const saveEmail = (emailCriteria: ChangeEvent<HTMLInputElement>): void => {
        setUserSearchCriteria(prev => ({
            ...prev,
            email: emailCriteria.target.value
        }))
    }

    const saveNum = (numCriteria: ChangeEvent<HTMLInputElement>): void => {
        const numCriteriaValue = numCriteria.target.value
        setUserSearchCriteria(prev => ({
            ...prev,
            num: numCriteriaValue
        }))
    }

    return { saveEmail, saveNum, userSearchCriteria }
}
export default useSaveCriteria