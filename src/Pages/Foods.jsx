import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context_Configs/Context';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './Components/SearchBar';
// import PropTypes from 'prop-types';

function Foods() {
  const { dataFood } = useContext(Context);
  const [showSearch, setShowSearch] = useState(false);
  const foods = 'foods';
  return (
    <>
      <div>
        <h1 data-testid="page-title">Comidas</h1>
        { showSearch ? <SearchBar value={ foods } /> : <p>Desapareceu</p> }
        <Link to="/perfil">
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="Botão que direciona para a tela de perfil"
          />
        </Link>
        <button
          onClick={ () => setShowSearch(!showSearch) }
          type="button"
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="Botão com imagem de uma lupa: abre uma barra de pesquisa"
          />
        </button>
      </div>
      <div>
        { dataFood !== null ? dataFood.meals.map((mals) => <p>{mals.strMeal}</p>) : 'coisado'}
      </div>
    </>
  );
}

export default Foods;
