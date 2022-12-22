import './App.css';
import { About, Certificates, Footer, NavBar, Projects, Skills } from "./components";

function App() {
  
  return (
    <div className="App">
      

      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Footer />
    </div>
  );
};

export default App;
