import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './Signup.css'

function Signup(){
  
  return(
    <ModalWithForm
      title="Sign up"
      buttonText ="Sign up"
    >
        <label htmlFor="signup-name"  className="Signup__name">Name </label>
        <input 
        type="text"
        className="ModalWithForm__input"
        placeholder="name"
        id="signup-name"
        name="name"
        required
        />
         <label htmlFor="signup-email"  className="Signup__email">Email </label>
        <input 
        type="email"
        className="ModalWithForm__input"
        placeholder="Email"
        id="signup-email"
        name="email"
        required
        />
           <label htmlFor="signup-password"  className="Signup__password">Password </label>
        <input 
        type="password"
        className="ModalWithForm__input"
        placeholder="password"
        id="signup-password"
        name="password"
        minLength="8"
        maxLength="16"
        required
        />
    </ModalWithForm>
  )
}

export default Signup;