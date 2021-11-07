
import './App.css';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" ><Home/></Route>
            <Route path="/home"><Home/></Route>
            <Route path="/login"><Login/></Route>
            <Route path="/register"><Register/></Route>
            <PrivateRoute path="/shipping"><Shipping /></PrivateRoute>
            <PrivateRoute path="/placeorder"><PlaceOrder /></PrivateRoute>
          </Switch>
        </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
