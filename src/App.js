import './App.css';
import Biography from './containers/Biography';
import Contact from './containers/Contact';
import Navbar from './containers/Navbar'
import Projects from './containers/Projects';
import Socials from './containers/Socials';

function App() {
  return (
    <>
      <Navbar/>
    <div className={"content-container"}>
      <Biography/>
      <Projects/>
      <Socials/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
