import Register from "./pages/register";
import Fields from "./pages/fields";
import Mentors from "./pages/listMentors";
import Mentees from "./pages/listMentee";
import MentorsByField from "./pages/listMentorsByField";
import Profile from "./pages/profile";
import ProfileMentor from "./pages/profileMentor";
import ProfileMentee from "./pages/profileMentee";
import DemoSearch from "./pages/demoSearch";
import Circulo from "./assets/circulo.svg";
import "./pages/navbar.css";
import Home from "./pages/home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <img src={Circulo} width="90" height="90" alt="circulo" />
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/inicio" className="texto-navbar">
                Início<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/areas" className="texto-navbar">
                Áreas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cadastro" className="texto-navbar">
                Cadastro
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/perfil" className="texto-navbar">
                Perfil
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Router>
        <Switch>
          <Route path="/inicio">
            <Home />
          </Route>
          <Route path="/cadastro">
            <Register />
          </Route>
          <Route path="/areas">
            <Fields />
          </Route>
          <Route path="/perfil">
            <Profile />
          </Route>
          <Route path="/listaMentores">
            <Mentors />
          </Route>
          <Route path="/listaGafanhotos">
            <Mentees />
          </Route>
          <Route path="/mentoresArea">
            <MentorsByField />
          </Route>
          <Route path="/mentor">
            <ProfileMentor />
          </Route>
          <Route path="/gafanhoto">
            <ProfileMentee />
          </Route>
          <Route path="/busca">
            <DemoSearch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
