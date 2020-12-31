import './App.css';
import Biography from './containers/Biography';
import Contact from './containers/Contact';
import Navbar from './containers/Navbar'
import Projects from './containers/Projects';
import Socials from './containers/Socials';

function App() {
  return (
    <div className={"content-container"}>
      <Navbar/>
      <Biography/>
      <Projects/>
      <Socials/>
      <Contact/>
    </div>
  );
}

export default App;
