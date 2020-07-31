import React from "react";
import LogoMain from "../../assets/img/logoGuiFlix.png";
import { Link } from 'react-router-dom';
import "./Menu.css";
import ButtonLink from "./components/ButtonLink";
import Button from '../Button';


function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={LogoMain} alt="GuiFlix logo" />
      </Link>
      
      
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
