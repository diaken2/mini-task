import {Box, TextField } from "@mui/material";
import React,{ FC } from "react";
import Button from "@mui/material/Button";
import useSaveCriteria from "./hooks/useSaveCriteria/useSaveCriteria";
import useSearchRequest from './hooks/useSearchRequest/useSearchRequest'
import ClosableAlert from "../closable-alert/ClosableAlert";
import UserList from "../user-list/UserList";
import TextFieldWithMask from "../text-field-with-mask/TextFieldWithMask"
const SearchUser: FC = () => {
  const { saveEmail, saveNum, userSearchCriteria:{email,num}} = useSaveCriteria();
  const {sendSearchRequest,errorsValidation,isErrorVisible, errorMessage,closeErrorAlert,foundUsers, isLoading} = useSearchRequest()
  
  
  return (
    <Box display="flex" alignItems="center" marginTop="10px" flexDirection="column" gap="10px">
      <ClosableAlert onClose={closeErrorAlert} errorMessage={errorMessage} isOpen={isErrorVisible}/>
      <TextField error={!!errorsValidation.email} helperText={errorsValidation.email} value={email} onChange={saveEmail} required id="outlined-basic" label="Email" variant="outlined" />
      <TextFieldWithMask errorProp={!!errorsValidation.num} helperTextProp={errorsValidation.num} numProp={num} saveNumProp={saveNum}/>
      <Button  disabled={!email} onClick={()=>sendSearchRequest(email,num)} variant="outlined">Submit</Button>
      <UserList foundedUsers={foundUsers} isLoading={isLoading}/>
    </Box>
  )
  }

export default React.memo(SearchUser)