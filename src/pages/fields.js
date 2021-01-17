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
      <h1 className="areas">Selecione a área para ganhar experiência</h1>
      <div>
          <img src={tecnologia} alt="cpu" className="icone" />
          <h3>Tecnologia</h3>
          <img src={engenharia} alt="foguete" className="icone" />
          <h3>Engenharia</h3>
          <img src={entretenimento} alt="rolo de filme" className="icone" />
          <h3>Entretenimento</h3>
      </div>
      <div>
        <img src={negocios} alt="papel e dinheiro" className="icone" />
        <h3>Negócios</h3>
        <img src={saude} alt="coração com pulso" className="icone" />
        <h3>Saúde</h3>
        <img src={outras} alt="ondas" className="icone" />
        <h3>Outras</h3>
      </div>
    </div>
  );
}

export default Fields;
