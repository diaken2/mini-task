import React,{ FC } from "react"
import { TextField } from "@mui/material";
import InputMask from 'react-input-mask'
import { ITextFieldWithMask } from './types/types'

const TextFieldWithMask: FC<ITextFieldWithMask> = ({ errorProp, helperTextProp, numProp, saveNumProp }) => {
  return (
    <InputMask mask="99-99-99" value={numProp} onChange={saveNumProp} disabled={false} maskChar=" ">
      {/*//@ts-ignore */}
      {() => <TextField error={errorProp} helperText={helperTextProp} id="outlined-basic" label="Number" variant="outlined" />}
    </InputMask>
  )
};

export default TextFieldWithMask;

