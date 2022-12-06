import './App.css';
import sofa from './Pages/Sofa';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewFurnature from './Pages/NewFurnature';
import Footer from './Pages/Footer';
import Navbaritem from './components/navbar';
import Home from './Pages/Home';
import AddCart from './Pages/AddCart';
import Cart from './Pages/Cart'
import Beds from './Pages/Beds';
import Fav from './Pages/Fav';
import MainCart from './Pages/MainCart';
function App() {

  return (
    <BrowserRouter>
      <div className="container1">
        <Navbaritem />
        
        <Switch>
          <Route exact path={'/'} component={Home } />
          <Route exact path={"/newfurnature"} component={NewFurnature} />
          <Route exact path={"/sofa"} component={sofa} />
          <Route exact path={"/Beds"} component={Beds} />
          <Route exact path={"/AddCart/:name"} component={AddCart} />
<Route exact path={"/Cart"}component={MainCart}/>
<Route exact path={"/fav"}component={Fav}/>


        </Switch>
        
        <Footer />
      </div>

    </BrowserRouter>


  );
}

export default App;
