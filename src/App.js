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
import Payment from './components/Payment';
import Footer from './components/Footer';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        {/* Navigation Bar */}
        <CartProvider>
          <NavBar />
          <div className="main">
            <Switch>
              {/* Home Screen */}
              <Route exact path="/">
                <ItemListContainer />
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
              {/* Payment Screen */}
              <Route exact path="/payment">
                <Payment />
              </Route>
            </Switch>
          </div>
          <Footer />
        </CartProvider>
      </Router>



    </div>
  );
}

export default App;
