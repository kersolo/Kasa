import Header from './components/Header/Header';
import Router from './Routes';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Router />
      </div>

      <Footer />
    </>
  );
}

export default App;
