import './App.css';
import sea from './assets/images/sea.jpg';
import cat from './assets/images/cat.png';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';


const App = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Skills />
      <Projects />
    </div>
  )
}

export default App;
