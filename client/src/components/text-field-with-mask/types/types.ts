import { ChangeEvent } from "react";

export interface ITextFieldWithMask{
    errorProp:boolean,
    helperTextProp:string,
    numProp:string,
    saveNumProp:(numCriteria:ChangeEvent<HTMLInputElement>)=>void 
    
}