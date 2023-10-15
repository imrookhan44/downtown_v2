import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import Exhibition from './components/ex/Exhibition';
import Map from './components/map/Map';
import Education from './components/education/Education';
import Contactus from './components/contactus/Contactus';
import Faq from './components/faq/Faq';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Exhibition />
      <Map />
      <Education />
      <Contactus />
      <Faq />
    </>
  );
}

export default App;
