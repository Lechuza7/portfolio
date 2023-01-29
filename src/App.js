import './App.css';
import { About, Certificates, Footer, NavBar, Projects, ScrollButton, Skills } from "./components";

function App() {
  
  return (
    <div className="App">
      

      <NavBar />
      <About />
      <Projects />
      <ScrollButton />
      <Skills />
      <Certificates />
      <Footer />
    </div>
  );
};

export default App;
