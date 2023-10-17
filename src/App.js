import React from 'react';
import './App.css';
import Header from './Componentes/Layout/Header/header';
import Main from './Componentes/Layout/Main/main';
import About from './Componentes/Layout/About/about';
import Projetos from './Componentes/Layout/Projetos';
import Contato from './Componentes/Layout/Contato/contato';



function App() {
  return (
    <div>
    <Header />
    <Main />
    <About />
    <Projetos />
    <Contato />
    </div>


  );
}

export default App;
