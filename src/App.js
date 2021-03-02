import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
