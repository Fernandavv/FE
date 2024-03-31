import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from "./components/Footer"; // Altere o nome do arquivo para corresponder ao nome real no disco
import 'bootstrap/dist/css/bootstrap.min.css'



import'./App.css';



function App() {
  return (
    <div className='App'>
    <Navbar />
    <Banner />
    <Skills />
    <Projects />
    <Footer/>



    </div>

  );
}

export default App;
