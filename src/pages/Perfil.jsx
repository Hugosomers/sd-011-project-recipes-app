import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Perfil extends Component {
  render() {
    const email = JSON.parse(localStorage.getItem('user'));
    return (
      <div>
        <Header title="Perfil" />
        <p data-testid="profile-email">{email}</p>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="profile-done-btn"
          >
            Receitas Feitas
          </button>
        </Link>
        <Link to="/receitas-favoritas">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => localStorage.clear() }
          >
            Sair
          </button>
        </Link>
        <Footer />
      </div>
    );
  }
}
