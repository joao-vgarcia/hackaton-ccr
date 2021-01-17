import ponte from "../assets/ponte.png";
import tecnologia from "../assets/cpu.svg";
import engenharia from "../assets/rocket-launch.svg";
import entretenimento from "../assets/film-reel.svg";
import negocios from "../assets/bill.svg";
import saude from "../assets/cardiogram.svg";
import outras from "../assets/sound-waves.svg";
import "./fields.css";
import userMentor from "../assets/user.svg";
import mentor from "../assets/profileMentor.JPG";
import star from "../assets/star.svg";
import React from "react";


function Mentees() {
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
        <a href="/mentor"><h5>Perfil Mentor</h5></a>
        <h5>Área Saúde</h5>
        <a href="/listaGafanhotos"><h5>30 mentorias</h5></a>
      </div>
      <h2 className="areas">Lista de Gafanhotos</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Experiência</th>
          </tr>
        </thead>
        <tbody>
          <tr tabIndex="1">
            <th scope="row" >1</th>
            <td><h3>Kram</h3></td>
            <td tabIndex="2"><h3>kram@gafanhoto.com</h3></td>
            <td><img src={negocios} alt="papel com dinheiro" className="icone" width="5px" height="5px"/> Negócios</td>
          </tr>
          <tr tabIndex="3">
            <th scope="row">2</th>
            <td><h3>Ohto</h3></td>
            <td tabIndex="4"><h3>ohto@gafanhoto.com</h3></td>
            <td><img src={entretenimento} alt="rolo de filme" className="icone" width="5px" height="5px"/> Entretenimento</td>
          </tr>
          <tr tabIndex="5">
            <th scope="row">3</th>
            <td><h3>Asiram</h3></td>
            <td tabIndex="6"><h3>asiram@gafanhoto.com</h3></td>
            <td><td><img src={saude} alt="coração com pulso" className="icone" width="5px" height="5px"/>Saúde</td></td>
          </tr>
          <tr tabIndex="7">
            <th scope="row" >1</th>
            <td><h3>Mit</h3></td>
            <td tabIndex="8"><h3>mit@gafanhoto.com</h3></td>
            <td><img src={engenharia} alt="foguete" className="icone" width="5px" height="5px"/>Engenharia</td>
          </tr>
          <tr tabIndex="9">
            <th scope="row">2</th>
            <td><h3>Aras</h3></td>
            <td tabIndex="10"><h3>aras@gafanhoto.com</h3></td>
            <td><img src={outras} alt="ondas" className="icone" width="5px" height="5px"/>Outras</td>
          </tr>
          <tr tabIndex="11">
            <th scope="row">3</th>
            <td><h3>Tak</h3></td>
            <td tabIndex="12"><h3>tak@gafanhoto.com</h3></td>
            <td><td><img src={tecnologia} alt="cpu" className="icone" width="5px" height="5px"/>Tecnologia</td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Mentees;
