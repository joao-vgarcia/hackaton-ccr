import ponte from '../assets/ponte.png';
import './register.css';

function Register () {
  return(
    <div>
      <img src={ponte} alt="ponte"className="imagem"/>
      <h1 className="cadastro">Cadastro</h1>
      <div>
        <label className="nomes">Nome</label>
        <input placeholder="Nome" required="true"/> 
      </div>
      <div>
        <label>Email</label>
        <input placeholder="Email"/> 
      </div>
      <div>
        <label>Idade</label>
        <input placeholder="idade"/> 
      </div>
    </div>
  )
}

export default Register