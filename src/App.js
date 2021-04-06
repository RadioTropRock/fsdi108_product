import Catalog from './components/catalog';
import About from './components/about';
import Home from "./components/home";
import Footer from './components/footer';
import NavBar from './components/navBar';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Cart from "./components/cart";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/catalog" exact component={Catalog}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/cart" exact component ={Cart}></Route>
      </Switch>

      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;

