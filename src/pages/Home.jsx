import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import '../styles/Home.css';

function Home() {
  //state
  //comportement
  //affichage (render)
  return (
    <div className="home">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
