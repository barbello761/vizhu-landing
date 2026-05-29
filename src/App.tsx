import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { About } from './components/sections/About';
import { HowItWorks } from './components/sections/HowItWorks';
import { Features } from './components/sections/Features';
import { Stats } from './components/sections/Stats';
import { Market } from './components/sections/Market';
import { Roadmap } from './components/sections/Roadmap';
import { FAQ } from './components/sections/FAQ';
import { Download } from './components/sections/Download';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к основному содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <About />
        <HowItWorks />
        <Features />
        <Stats />
        <Market />
        <Roadmap />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </>
  );
}

export default App;
