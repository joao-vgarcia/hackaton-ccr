import ponte from "../assets/ponte.png";
import mentee from "../assets/user_gafanhoto.svg";
import userMentor from "../assets/user.svg";
import "./fields.css";

function Profile() {
  return (
    <div>
      <img src={ponte} alt="ponte" className="imagem" />
      <h2 className="areas">Selecione o seu perfil</h2>
      <div className="text-container">
        <img src={mentee} alt="icone" className="icone" />
        <img src={userMentor} alt="icone" className="icone" />
      </div>
      <div className="text-container">
        <a href="/gafanhoto">
          <h3>Gafanhoto</h3>
        </a>
        <a href="/mentor">
          <h3>Mentor</h3>
        </a>
      </div>
      <div className="text-container">
        <h5 className="min-box">
          Pouca, ou nenhuma experiência na área. Tem vontade de aprender
        </h5>
        <h5>Certa experiência na área. Gosta de compartilhar conhecimentos </h5>
      </div>
    </div>
  );
}

export default Profile;
