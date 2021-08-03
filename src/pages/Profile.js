import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  return (
    <main>
      <Header haveSearchBtn={ false } title="Perfil" />
      <Footer />
    </main>
  );
}
