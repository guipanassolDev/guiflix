import React from "react";
import LogoMain from "../../assets/img/logoGuiFlix.png";
import "./Menu.css";
import ButtonLink from "./components/ButtonLink";
import Button from '../Button';


function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={LogoMain} alt="GuiFlix logo" />
      </a>
      
      
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
