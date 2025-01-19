import { Link } from 'react-router-dom';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './Login.css';
import logo from '../../assets/beehive-logo.png';
import friends from '../../assets/pexels-photo-9578714.jpeg'

function Login(){
  
  return(
    <div className='Login'>
   
    <div  className="Login__image-container">
    <img className="Login__image" src={friends} alt="Image of friends"/>
    </div>
    <div>
          <a> 
        <img className="Login__logo" src={logo} alt="BeeHive logo"/>
    </a>
        <div className='Login__headings'> 
    <h1 className='Login__heading'>Welcome Back to BeeHive</h1>
    <p className='Login__sub-heading'>Your hive is buzzing—don't miss the action!💬</p>
   
    </div>
    <ModalWithForm
      title="Login"
      buttonText="Fly in 🌥️"
    >
         <label htmlFor="Login-email"  className="Login__email">Email </label>
        <input 
        type="email"
        className="ModalWithForm__input"
        placeholder="Email"
        id="Login-email"
        name="email"
        required
        />
           <label htmlFor="Login-password"  className="Login__password">Password </label>
        <input 
        type="password"
        className="ModalWithForm__input"
        placeholder="password"
        id="Login-password"
        name="password"
        minLength="8"
        maxLength="16"
        required
        />
    </ModalWithForm>
    <p className="Login__login-text">Don’t have a hive? Let’s build one together!<Link to='/signup' className='Login__login-link'> Sign Up</Link></p>
    </div>
    </div>
    
  )
}

export default Login;