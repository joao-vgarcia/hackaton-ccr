import ponte from '../assets/ponte.png';
import './home.css';

function Home() {
  return (
    <div className="bigContaier">
      <div className="headerMenu">
        <a href="#">Home</a>
        <a href="#">Cadastro</a>
        <a href="#">Áreas</a>
        <a href="#">Perfil</a>
      </div>

      <h1 className="logo">Meu mentor</h1>

      <img src={ponte} alt="ponte" className="imagem" />

      <div className="container">
        <input placeholder="Digite o que procura" type="text" />
        <button className="buscarBotao">Buscar</button>
      </div>
    </div>
  )
}
export default Home