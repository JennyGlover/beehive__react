import logo from '../../assets/beehive-logo.png';
import './Navigation.css';


function Navigation (){

    return(
    <div className='Navigation'>
    <div className='Navigation__logo-container'>
    <img className="Navigation__logo" src={logo} alt="BeeHive logo"/>
    <p className="Navigation__logo-text">BeeHive</p>
    </div>
    <p className='Navigation__menu-text'>Menu</p>
    <div className='Navigation__page-Links'>
    <p className='Navigation__friends-link'>👯‍♀️ Pals</p>
    <p className='Navigation__Messages-link'>💬 Buzz</p>
    </div>
    <p className='Navigation__profile-Modal-link'>🐝 Profile</p>

    </div>
    );
}

export default Navigation;