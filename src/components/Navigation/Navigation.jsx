import logo from '../../assets/beehive-logo.png';
import './Navigation.css';


function Navigation (){

    return(
    <div className='Navigation'>
    <div className='Navigation__logo-container'>
    <img className="Navigation__logo" src={logo} alt="BeeHive logo"/>
    <p className="Navigation__logo-text">BeeHive</p>
    <p className="Navigation__logo-message">That's my honey!</p>
    </div>
    <hr className="Navigation__line"></hr> 
    <p className='Navigation__menu-text'>Menu</p>
    <div className='Navigation__page-Links'>
    <p className='Navigation__page-link'>👯‍♀️ Pals</p>
    <p className='Navigation__page-link'>💬 Buzz</p>
    </div>
    <hr className="Navigation__line"></hr> 
    <p className='Navigation__page-link Navigation__profile-Modal-link '>🐝 Profile</p>

    </div>
    );
}

export default Navigation;