import './index.css';
import Header from "./Copoment/Header";
import Hero from './Copoment/Hero';
import About from './Copoment/About';
import Projet from './Copoment/Projects';
import Blog from './Copoment/Blog';
import Contact from './Copoment/Contact';
import Footer from './Copoment/Footer';

    function App () {
      return (
        <>
          <Header/>
          <Hero/>
          <About/>
          <Projet />
          <Blog />
          <Contact />
          <Footer/>
        </>
      );
    }

export default App;