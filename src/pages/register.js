import ponte from '../assets/ponte.png';
import './register.css';

function Register() {
  return (
    <div className="bigContaier">
      <img src={ponte} alt="ponte" className="imagem" />
      <h1 className="cadastro">Cadastro</h1>
      <div className="container">
        <div className="inputContainer">
        <label className="labels">Nome:</label>
          <input placeholder="Nome" required="true" className="inputs" />
        </div>
        <div className="inputContainer">
        <label className="labels">Email:</label>
          <input placeholder="Email" className="inputs" />
        </div>
        <div className="inputContainer">
        <label className="labels">Idade:</label>
          <input placeholder="idade" className="inputs" />
        </div>
        <div className="inputContainer">
          <label className="labels">Sobre:</label>
          <textarea placeholder="idade" className="inputs" />
        </div>
        <button className="botao">Enviar</button>
      </div>
    </div>
  )
}

export default Register