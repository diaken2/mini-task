export interface IClosableAlert{
    onClose:()=>void,
    errorMessage:string,
    isOpen:boolean
}