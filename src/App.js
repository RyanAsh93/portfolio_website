import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
