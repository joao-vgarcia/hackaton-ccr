import ponte from "../assets/ponte.png";
import mentor from "../assets/profileMentor.JPG";
import profileMentee from "../assets/profileMentee.JPG";
import mentee from "../assets/user_gafanhoto.svg";
import userMentor from "../assets/user.svg";
import saude from "../assets/cardiogram.svg";
import experiencias from "../assets/reward.svg";
import "./profileMentor.css";

function ProfileMentee() {
  return (
    <>
      <img src={ponte} alt="ponte" className="imagem" />
      <div className="text-container">
        <img
          src={profileMentee}
          alt="foto de um jovem"
          width="15%"
          height="15%"
        />
      </div>
      <div className="text-container">
        <h2 className="nomePerfil">Garfield Tyson</h2>
      </div>
      <div className="text-container">
        <img src={mentee} alt="icone" className="icone" />
        <img src={saude} alt="icone" className="icone" />
        <img src={experiencias} alt="icone" className="icone" />
      </div>
      <div className="text-container">
        <h5>Gafanhoto</h5>
        <h5>Saúde</h5>
        <h5>1000px</h5>
      </div>
        <div className="nomePerfil">
          <h2>Recomendações</h2>
        </div>
        <div className="recomendacoes">
        <img
          src={mentor}
          alt="icone"
          width="12%"
          height="12%"
        />
        <h4>
          Emerged into consciousness science worldlets at the edge of forever kindling the energy hidden in matter rogue. Courage of our questions two ghostly white figures in coveralls and helmets are softly dancing dispassionate extraterrestrial observer tesseract concept of the number one tesseract. Another world as a patch of light extraordinary claims require extraordinary evidence inconspicuous motes of rock and gas extraordinary claims require extraordinary evidence brain is the seed of intelligence and billions upon billions upon billions upon billions upon billions upon billions upon billions.
        </h4>
        <img
          src={userMentor}
          alt="icone"
          className="icone"
        />
        <h4>
          Emerged into consciousness science worldlets at the edge of forever kindling the energy hidden in matter rogue. Courage of our questions two ghostly white figures in coveralls and helmets are softly dancing dispassionate extraterrestrial observer tesseract concept of the number one tesseract. Another world as a patch of light extraordinary claims require extraordinary evidence inconspicuous motes of rock and gas extraordinary claims require extraordinary evidence brain is the seed of intelligence and billions upon billions upon billions upon billions upon billions upon billions upon billions.
        </h4>
        <img
          src={userMentor}
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

export default ProfileMentee;
