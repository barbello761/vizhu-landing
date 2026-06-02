import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Carousel } from './components/sections/Carousel';
import { Team } from './components/sections/Team';
import { Contacts } from './components/sections/Contacts';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к основному содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Carousel />
        <Team />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
