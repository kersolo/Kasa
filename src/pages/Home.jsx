import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import '../styles/Pages.css';
import ImgBannerHome from '../assets/Banner.svg';
import logo from '../assets/logo.svg';

function Home() {
  //state
  //comportement
  //affichage (render)
  return (
    <div className="page">
      <Header />
      <Banner
        src={ImgBannerHome}
        text={'Chez vous, partout et ailleurs'}
        alt="Illustration d'une côte"
      />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
