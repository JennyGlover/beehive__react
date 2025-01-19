import { Children } from "react";
import './ModalWithForm.css'

function ModalWithForm({
    children,
    title,
    buttonText,
    name,
}){
    return(
        <>
        <form
        className={`ModalWithForm__form`}
        >
         <p className="ModalWithForm__form-title">{title}</p>
        {children}
        <button className="ModalWithForm__submit-button" >{buttonText}</button>
        </form>
        </>
    )
}

export default ModalWithForm;