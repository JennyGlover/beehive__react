import "./ImageCard.css";

function ImageCard({ position }) {
  return <div className={`ImageCard ImageCard__position-${position}`}></div>;
}

export default ImageCard;
