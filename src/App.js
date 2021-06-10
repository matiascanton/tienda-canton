import React from 'react';

import NavBar from './components/NavBar';

import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Bienvenidos a la tienda" />

    </div>
  );
}

export default App;
