import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import DefaultScreen from './screens/DefaultScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
    <div className="grid-container" >
      <topHeader className="topheading">
      <div>
        <p>Free Shipping | COD | 6 Months Money Back Guarantee</p>
    </div>
      </topHeader>
           <header className="row">
               <div>
                 <img className="logo" src="./Images/Logo.png" alt=""/>
                <Link className="brand" to="/">Sarthi Ayurveda</Link>
                <Link className="defaultscreen" to="/">Home</Link>
                <Link className="productscreen" to="/product">Products</Link>
            </div>
            <div>
                <Link to="/cart">Cart
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
                </Link>
                {
                  userInfo ? (
                    <div className="dropdown">
                    <Link to="#">
                      {userInfo.name} <i className="fa fa-caret-down"></i>
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/profile">User Profile</Link>
                        </li>
                        <li>
                        <Link to="/orderhistory">Order History</Link>
                        </li>
                        <li>
                        <Link to="#signout" onClick={signoutHandler}>
                          Sign Out
                        </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link to="/signin">Sign In</Link>
                  )}
               </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeOrder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          <Route path="/product" component={HomeScreen} exact></Route>
          <Route path="/" component={DefaultScreen} exact></Route>
          </main>
        <footer className="row center">Copyright &copy; 2021 Sarthi Ayurveda India.All rights reserved</footer>

    </div>
    </BrowserRouter>
  );
}

export default App;
