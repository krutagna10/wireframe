import "./Artwork.css";

interface ArtworkProps {
  artwork: {
    name: string;
    year: number;
    description: string;
    source: string;
    artist: {
      image: string;
      name: string;
    };
    images: {
      thumbnail: string;
      hero: {
        small: string;
        large: string;
      };
      gallery: string;
    };
  };
}

function Artwork({ artwork }: ArtworkProps) {
  return (
    <div className="artwork">
      <div>
        <img src={artwork.images.gallery} alt={artwork.name} />
      </div>
    </div>
  );
}

export default Artwork;
