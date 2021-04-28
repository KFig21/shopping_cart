import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from "react";
import Nav from './components/Nav';
import Shop from './components/Shop';
import About from './components/About';
import Home from './components/Home';
import Cart from './components/Cart';
import ItemPage from './components/ItemPage';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (newItem) => {
    // check if already in cart
    const alreadyInCart = cartItems.map((item) => item.id).includes(newItem.id) 
    && cartItems.map((item) => item.size).includes(newItem.size)
    && cartItems.map((item) => item.name).includes(newItem.name);
    // if in cart add 1 to qty
    if (alreadyInCart) {
      changeQty(newItem.id, newItem.size, newItem.name, newItem.qty);
    } else {
      // if not add complete item
      setCartItems([...cartItems, newItem]);
    }
    console.log(cartItems)
  };
  const changeQty = (id, size, name, delta) =>
    setCartItems(
      cartItems.map(
        (item) => (item.id === id ? 
                    item.size === size ? 
                    item.name === name ? { ...item, qty: parseInt(item.qty) + parseInt(delta) } : item : item : item)
      )
    );
  const deleteCartItem = (id) =>
    setCartItems(cartItems.filter((item) => item.id !== id));

  const reset = () => {
    setCartItems([])
  }

  const cartTotalItems = cartItems.map((item) => parseInt(item.qty)).reduce((a, c) => a + c, 0);
  
  return (
    <Router basename={'shopping_cart'}>
      <div className="App">
        <Nav cartTotalItems={cartTotalItems}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route 
            exact 
            path="/shop/:id" 
            render={(routeProps) => (
              <ItemPage
                itemId={routeProps.match.params.id}
                addCartItem={addCartItem}
              />)}
            />
          <Route path="/about" component={About} />
          <Route 
            path="/cart" 
            render={() => (
            <Cart
              items={cartItems}
              deleteCartItem={deleteCartItem}
              changeQty={changeQty}
              reset={reset}
            />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
