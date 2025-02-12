import "./ImageCard.css";

function ImageCard({ position, image }) {
  return <div className={`ImageCard ImageCard__position-${position}`}>
     <img className="ImageCard__image" src={image}></img>

  </div>;
}

export default ImageCard;
