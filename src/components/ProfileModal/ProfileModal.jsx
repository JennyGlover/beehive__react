import { useRef, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './ProfileModal.css';


function ProfileModal ({handleCloseModal, isProfileVisible, handleEscapeCloseModal}) {
  const modalRef = useRef(null);
  
  useEffect(() => {
   if(isProfileVisible && modalRef.current) {

    //programmatically focussing the modal when it becomes visible
    modalRef.current.focus();
   }
  }, [isProfileVisible]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleCloseModal(); //Close modal when Escape is Pressed
    }
  }
    return (
        <div 
        ref={modalRef}
        className={isProfileVisible? 'ProfileModal' : 'ProdileModal ProfileModal__hidden'}
        tabIndex={-1} //Makes the div focusable programmatically
        onKeyDown={handleKeyDown} //handles keypresses when focused
        onClick={handleCloseModal}
        >
           <div className="profileModal__container"
           onClick={(e) => e.stopPropagation()} //Prevents event propagation to parent
           >
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
        <div 
        className="ProfileModal__close-btn"
        onClick={() => {
          handleCloseModal();
        }}></div>
</div>
        </div>
    );
}


export default ProfileModal

