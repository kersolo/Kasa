import Banner from '../components/Banner/Banner';
import Gallery from '../components/Gallery/Gallery';
import ImgBannerHome from '../assets/bannerHome.svg';

//composant Home (page d'accueil avec tout les logements proposés à la location)//
function Home() {
  return (
    <main>
      <Banner
        src={ImgBannerHome}
        text="Chez vous, partout et ailleurs"
        alt="Paysage"
      />
      <Gallery />
    </main>
  );
}

export default Home;
