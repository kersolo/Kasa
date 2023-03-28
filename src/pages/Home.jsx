import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import '../styles/Pages.css';
import ImgBannerHome from '../assets/bannerHome.svg';

function Home() {
  return (
    <div>
      <div className="page">
        <Header />
        <Banner
          src={ImgBannerHome}
          text={'Chez vous, partout et ailleurs'}
          alt="Paysage"
        />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
