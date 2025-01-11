import Layout from "../../layout/Layout.tsx";
import artworks from "../../data/data.ts";
import Artwork from "../../components/Artwork/Artwork.tsx";

function Home() {
  return (
    <Layout>
      <section>
        <div className="artworks">
          {artworks.map((artwork) => (
            <Artwork key={artwork.id} {...artwork} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Home;
