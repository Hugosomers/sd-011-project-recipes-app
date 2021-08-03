import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import ComidaPage from './pages/ComidaPage';
import Perfil from './pages/Perfil';
import BebidaPage from './pages/BebidaPage';
import ReceitaComidaPage from './pages/ReceitaComidaPage';
import ReceitaBebidaPage from './pages/ReceitaBebidaPage';
import ProcessoComidaPage from './pages/ProcessoComidaPage';
import ProcessoBebidaPage from './pages/ProcessoBebidaPage';
import Explorar from './pages/Explorar';
import ExplorarComida from './pages/ExplorarComida';
import ExplorarBebida from './pages/ExplorarBebida';
import ExplorarComidaIngredientes from './pages/ExplorarComidaIngredientes';
import ExplorarBebidaIngredientes from './pages/ExplorarBebidaIngredientes';
import ExplorarComidaArea from './pages/ExplorarComidaArea';
import ReceitaFeita from './pages/ReceitaFeita';
import ReceitaFavoritas from './pages/ReceitaFavoritas';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route path="/comidas/:id" render={ () => <ReceitaComidaPage /> } />
        <Route path="/bebidas/:id" render={ () => <ReceitaBebidaPage /> } />
        <Route
          path="/comidas/:id/in-progress"
          render={ () => <ProcessoComidaPage /> }
        />
        <Route
          path="/bebidas/:id/in-progress"
          render={ () => <ProcessoBebidaPage /> }
        />
        <Route exact path="/" render={ () => <Login /> } />
        <Route exact path="/comidas" render={ () => <ComidaPage /> } />
        <Route exact path="/bebidas" render={ () => <BebidaPage /> } />
        <Route exact path="/explorar" render={ () => <Explorar /> } />
        <Route exact path="/explorar/comidas" render={ () => <ExplorarComida /> } />
        <Route exact path="/explorar/bebidas" render={ () => <ExplorarBebida /> } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          render={ () => <ExplorarComidaIngredientes /> }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          render={ () => <ExplorarBebidaIngredientes /> }
        />
        <Route path="/explorar/comidas/area" render={ () => <ExplorarComidaArea /> } />
        <Route path="/perfil" render={ () => <Perfil /> } />
        <Route path="/receitas-feitas" render={ () => <ReceitaFeita /> } />
        <Route path="/receitas-favoritas" render={ () => <ReceitaFavoritas /> } />
      </Switch>
    </div>
  );
}

export default App;
