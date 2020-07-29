import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroUser from './pages/cadastro/Usuario'
import CadastroMesa from './pages/cadastro/Mesa'
import Page404 from './pages/Page404'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/usuario" component={CadastroUser} exact />
      <Route path="/cadastro/mesa" component={CadastroMesa} exact />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
