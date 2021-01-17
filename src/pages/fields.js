import ponte from "../assets/ponte.png";
import tecnologia from "../assets/cpu.svg";
import engenharia from "../assets/rocket-launch.svg";
import entretenimento from "../assets/film-reel.svg";
import negocios from "../assets/bill.svg";
import saude from "../assets/cardiogram.svg";
import outras from "../assets/sound-waves.svg";
import "./fields.css";

function Fields() {
  return (
    <div>
      <img src={ponte} alt="ponte" className="imagem" />
      <h2 className="areas">Selecione a área para ganhar experiência</h2>
      <a href="/">
      <div className="container">
        <img src={tecnologia} alt="cpu" className="icone" />     
        <img src={engenharia} alt="foguete" className="icone" />      
        <img src={entretenimento} alt="rolo de filme" className="icone" />      
      </div>
      <div className="text-container">
        <h3>Tecnologia</h3>
        <h3>Engenharia</h3>
        <h3>Entretenimento</h3>
      </div>
      <div className="container">
        <img src={negocios} alt="papel e dinheiro" className="icone" />
        <img src={saude} alt="coração com pulso" className="icone" />
        <img src={outras} alt="ondas" className="icone" /> 
      </div>
      <div className="text-container">
        <h3>Negócios</h3>
        <h3>Saúde</h3>
        <h3>Outras</h3>  
      </div>
      </a>
    </div>
  );
}

export default Fields;
