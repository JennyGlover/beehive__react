import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './ProfileModal.css';


function ProfileModal () {

    return (
        <div className="ProfileModal">
           
             <ModalWithForm title="Profile" buttonText="Save">
          <label htmlFor="ProfileModal-name" className="ProfileModal__name">
            Name{" "}
          </label>
          <input
            type="name"
            className="ModalWithForm__input"
            placeholder="Name"
            id="ProfileModal-name"
            name="name"
            required
          />
          <label htmlFor="ProfileModal-avatar" className="ProfileModal__avatar">
           Avatar Url{" "}
          </label>
          <input
            type="url"
            className="ModalWithForm__input"
            placeholder="Avatar"
            id="ProfileModal-avatar"
            name="avatar"
            required
          />
            <label htmlFor="ProfileModal-status" className="ProfileModal__status">
           Status{" "}
          </label>
          <input
            type="text"
            className="ModalWithForm__input"
            placeholder="Status"
            id="ProfileModal-status"
            name="status"
            required
          />
        </ModalWithForm>

        </div>
    );
}


export default ProfileModal

