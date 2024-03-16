import logo from './logo.svg';
import './App.css';
import Hero from './componants/hero/Hero';
import Footer from './componants/footer/Footer';
import About from './componants/about/About';
import SixCards from './reusableComponants/cards/Card';
import Skills from './reusableComponants/skills/Skills';
function App() {
  return (
    <div className="App">
      <Hero name={"Esraa magdy"} job={"Software Engineer"}/>
      <About/>
      <Skills/>
      <SixCards/>
      <Footer/>
    </div>
  );
}

export default App;
