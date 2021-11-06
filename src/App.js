import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Rotas from './Routes';
import './styles.css';
import Counter from './Components/Counter/Counter'
import Modal from './pages/Modal/Modal';

function App() {
  return (
    <div className="main">       
      <nav className="sidenav">
        <NavBar />
        <Modal/>
      </nav>
      <Counter/>
      <Rotas/>      
    </div>
  );
}
export default App;

