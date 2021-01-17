import ponte from '../assets/ponte.png';
import React, { useState } from "react";
import DemoSearch from './demoSearch';
import './home.css';

function Home() {
  const [results, setResults] = useState('');

  const onSearch = () => {
      setResults('Experiencia...')
  }

  return (
    <div>
     <h1 className="logo">Meu mentor</h1>
      <img src={ponte} alt="ponte" className="imagem" />

 
      <div className="container">
        <input placeholder="Digite o que procura" type="text" value={results} onChange={e => setResults(e.target.value)}/>
        <button className="buscarBotao" onClick={onSearch}>Buscar</button>
      </div>
      <div className="container">
        {results === 'Experiencia...' ? <DemoSearch/> : null }
      </div>
    </div>
  )
}
export default Home