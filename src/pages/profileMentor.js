import ponte from "../assets/ponte.png";
import mentor from "../assets/profileMentor.JPG";
import profileMentee from "../assets/profileMentee.JPG";
import mentee from "../assets/user_gafanhoto.svg";
import userMentor from "../assets/user.svg";
import saude from "../assets/cardiogram.svg";
import star from "../assets/star.svg";
import "./profileMentor.css";

function ProfileMentor() {
  return (
    <>
      <img src={ponte} alt="ponte" className="imagem" />
      <div className="text-container">
        <img
          src={mentor}
          alt="foto de uma mulher"
          width="15%"
          height="15%"
        />
      </div>
      <div className="text-container">
        <h2 className="nomePerfil">Marisa Kearns</h2>
      </div>
      <div className="text-container">
        <img src={userMentor} alt="icone" className="icone" />
        <img src={saude} alt="icone" className="icone" />
        <img src={star} alt="icone" className="icone" />
      </div>
      <div className="text-container">
        <h5>Mentor</h5>
        <h5>Saúde</h5>
        <h5>30</h5>
      </div>
        <div className="nomePerfil">
          <h2>Recomendações</h2>
        </div>
        <div className="recomendacoes">
        <img
          src={profileMentee}
          alt="icone"
          width="12%"
          height="12%"
        />
        <h4>
          Emerged into consciousness science worldlets at the edge of forever kindling the energy hidden in matter rogue. Courage of our questions two ghostly white figures in coveralls and helmets are softly dancing dispassionate extraterrestrial observer tesseract concept of the number one tesseract. Another world as a patch of light extraordinary claims require extraordinary evidence inconspicuous motes of rock and gas extraordinary claims require extraordinary evidence brain is the seed of intelligence and billions upon billions upon billions upon billions upon billions upon billions upon billions.
        </h4>
        <img
          src={mentee}
          alt="icone"
          className="icone"
        />
        <h4>
          Emerged into consciousness science worldlets at the edge of forever kindling the energy hidden in matter rogue. Courage of our questions two ghostly white figures in coveralls and helmets are softly dancing dispassionate extraterrestrial observer tesseract concept of the number one tesseract. Another world as a patch of light extraordinary claims require extraordinary evidence inconspicuous motes of rock and gas extraordinary claims require extraordinary evidence brain is the seed of intelligence and billions upon billions upon billions upon billions upon billions upon billions upon billions.
        </h4>
        <img
          src={mentee}
          alt="icone"
          className="icone"
        />
        <h4>
          Emerged into consciousness science worldlets at the edge of forever kindling the energy hidden in matter rogue. Courage of our questions two ghostly white figures in coveralls and helmets are softly dancing dispassionate extraterrestrial observer tesseract concept of the number one tesseract. Another world as a patch of light extraordinary claims require extraordinary evidence inconspicuous motes of rock and gas extraordinary claims require extraordinary evidence brain is the seed of intelligence and billions upon billions upon billions upon billions upon billions upon billions upon billions.
        </h4>
      </div>
    </>
  );
}

export default ProfileMentor;
