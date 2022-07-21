import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { reducer, initialState } from './reducers/cartReducers';

export const CartContext = React.createContext();

const Routing = () => {
  const { state, dispatch } = React.useContext(CartContext);
  const [totalPrice, setTotal] = React.useState(0);
  React.useEffect(() => {
    console.log('Cart', state);
    setTotal(
      state.reduce(
        (n, { product_price, quantity }) => n + product_price * quantity,
        0
      )
    );
    console.log(totalPrice);
  }, [state]);
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart summary={totalPrice} />
      </Route>
      <Route path='/checkout'>
        <Checkout summary={totalPrice} />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <CartContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          <Routing />
          {/* <Footer /> */}
        </Router>
      </CartContext.Provider>
    </>
  );
}

export default App;
