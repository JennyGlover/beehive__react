import logo from '../../assets/beehive-logo.png';
import './Header.css';


function Header (){

    return(
    <div className='Header'>
    <div className='Header__logo-container'>
    <img className="Header__logo" src={logo} alt="BeeHive logo"/>
    <p className="Header__logo-text">BeeHive</p>
    </div>
    <p className='Header__friends-'></p>
    </div>
    );
}

export default Header;