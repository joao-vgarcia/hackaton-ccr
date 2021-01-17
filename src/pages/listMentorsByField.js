import ponte from "../assets/ponte.png";
import saude from "../assets/cardiogram.svg";
import React from "react";


function MentorsByField() {
  return (
    <>
      <img src={ponte} alt="ponte" className="imagem" />
      <h2 className="areas">Lista de Mentores</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Área</th>
          </tr>
        </thead>
        <tbody>
          <tr tabIndex="1">
            <th scope="row" >1</th>
            <td><h3>Mark</h3></td>
            <td tabIndex="2"><h3>mark@meumentor.com</h3></td>
            <td><img src={saude} alt="coração com pulso" className="icone" width="5px" height="5px"/>Saúde</td>
          </tr>
          <tr tabIndex="3">
            <th scope="row">2</th>
            <td><h3>Otho</h3></td>
            <td tabIndex="4"><h3>otho@meumentor.com</h3></td>
            <td><img src={saude} alt="coração com pulso" className="icone" width="5px" height="5px"/>Saúde</td>
          </tr>
          <tr tabIndex="5">
            <th scope="row">3</th>
            <td><h3>Marisa</h3></td>
            <td tabIndex="6"><h3>marisa@meumentor.com</h3></td>
            <td><td><img src={saude} alt="coração com pulso" className="icone" width="5px" height="5px"/>Saúde</td></td>
          </tr>
          <tr tabIndex="7">
            <th scope="row" >1</th>
            <td><h3>Tim</h3></td>
            <td tabIndex="8"><h3>tim@meumentor.com</h3></td>
            <td><img src={saude} alt="coração com pulso" className="icone" width="5px" height="5px"/>Saúde</td>
          </tr>
          <tr tabIndex="9">
            <th scope="row">2</th>
            <td><h3>Sara</h3></td>
            <td tabIndex="10"><h3>sara@meumentor.com</h3></td>
            <td><img src={saude} alt="coração com pulso" className="icone" width="5px" height="5px"/>Saúde</td>
          </tr>
          <tr tabIndex="11">
            <th scope="row">3</th>
            <td><h3>Kat</h3></td>
            <td tabIndex="12"><h3>marisa@meumentor.com</h3></td>
            <td><td><img src={saude} alt="coração com pulso" className="icone" width="5px" height="5px"/>Saúde</td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default MentorsByField;
