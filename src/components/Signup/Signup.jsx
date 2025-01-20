import { Link } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./Signup.css";
import logo from "../../assets/beehive-logo.png";
import friends from "../../assets/pexels-photo-9578714.jpeg";

function Signup() {
  return (
    <div className="Signup">
      <div className="Signup__image-container">
        <img className="Signup__image" src={friends} alt="Image of friends" />
      </div>
      <div>
        <a>
          <img className="Signup__logo" src={logo} alt="BeeHive logo" />
        </a>
        <div className="Signup__headings">
          <h1 className="Signup__heading">Welcome to BeeHive</h1>
          <p className="Signup__sub-heading">
            Where every bee finds their hive. Chat, video, and endless
            buzz!🐝🍯💬
          </p>
        </div>
        <ModalWithForm title="Sign up" buttonText="Next 🌻">
          <label htmlFor="signup-name" className="Signup__name">
            Name{" "}
          </label>
          <input
            type="text"
            className="ModalWithForm__input"
            placeholder="name"
            id="signup-name"
            name="name"
            required
          />
          <label htmlFor="signup-email" className="Signup__email">
            Email{" "}
          </label>
          <input
            type="email"
            className="ModalWithForm__input"
            placeholder="Email"
            id="signup-email"
            name="email"
            required
          />
          <label htmlFor="signup-password" className="Signup__password">
            Password{" "}
          </label>
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
        <p className="Signup__login-text">
          Already part of the hive? Fly on in!{" "}
          <Link to="/login" className="Signup__login-link">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
