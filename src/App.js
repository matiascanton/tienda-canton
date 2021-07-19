import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Contexts
import { CartProvider } from './context/CartContext';

// Components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        {/* Navigation Bar */}
        <NavBar />
        <CartProvider>
          <Switch>
            {/* Home Screen */}
            <Route exact path="/">
              <ItemListContainer greetings="Bienvenidos a la tienda" />
            </Route>
            {/* Products List Screen */}
            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            {/* Product Detail Screen */}
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            {/* Cart Screen */}
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </CartProvider>
      </Router>



    </div>
  );
}

export default App;
