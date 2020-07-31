import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/cadastro/Video/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from "./pages/cadastro/Categoria";

const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
  //biblioteca react-router-dom = para rotas no react
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);
