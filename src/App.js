import React from 'react';

import NavBar from './components/NavBar';

import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Bienvenidos a la tienda" />
      <ItemDetailContainer />

    </div>
  );
}

export default App;
