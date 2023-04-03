import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import '../styles/Pages.css';
import ImgBannerHome from '../assets/bannerHome.svg';

function Home() {
  return (
    <body>
      <div className="page">
        <Header />
        <section>
          <Banner
            src={ImgBannerHome}
            text={'Chez vous, partout et ailleurs'}
            alt="Paysage"
          />
          <Gallery />
        </section>
      </div>
      <Footer />
    </body>
  );
}

export default Home;
