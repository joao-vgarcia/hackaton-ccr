import ponte from "../assets/ponte.png";
import "./register.css";

function Register() {
  return (
    <div className="bigContaier">
      <img src={ponte} alt="ponte" className="imagem" />
      <h1 className="cadastro">Cadastro</h1>
      <label className="labels">Nome:</label>
      <input placeholder="Nome" required="true" className="inputs" />
      <label className="labels">Email:</label>
      <input placeholder="Email" className="inputs" />
      <label className="labels">Idade:</label>
      <input placeholder="idade" className="inputs" />
      <label className="labels">Sobre:</label>
      <textarea placeholder="idade" className="inputs" />
      <button className="botao">Enviar</button>
    </div>
  );
}

export default Register;
