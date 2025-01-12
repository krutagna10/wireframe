import Layout from "../../layout/Layout.tsx";
import "./Home.css";
import json from "../../data/data.json";
import Artwork from "../../components/Artwork/Artwork.tsx";

function Home() {
  const artworks = json;
  console.log(artworks);

  return (
    <Layout>
      <section>
        <div className="container gallery">
          {artworks.map((artwork, index) => (
            <Artwork key={index} artwork={artwork} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Home;
