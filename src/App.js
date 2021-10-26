import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import samples from './samples';

function App() {
  // console.log( samples )
  return (
    <div>
      <Header />
      <div id="about">
        <p>Hello! Welcome to my portfolio! I am a full stack web developer excited to showcase my skills!</p>
      </div>
      <div id="projects">
        <Project samples={samples} />
      </div>
      <div id="contact">
        <Footer />
      </div>


    </div>

  );
}

export default App;
