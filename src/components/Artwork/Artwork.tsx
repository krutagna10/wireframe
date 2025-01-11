import Button from "../Button/Button.tsx";
import "./Artwork.css";

interface ArtworkProps {
  id: string;
  image: string;
  title: string;
  price: number;
}

function Artwork({ title, image, price }: ArtworkProps) {
  return (
    <div className="artwork">
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <Button className="btn--yellow">View</Button>
        <Button className="btn--green">Add to Cart</Button>
      </div>
    </div>
  );
}

export default Artwork;
