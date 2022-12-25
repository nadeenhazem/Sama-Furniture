import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewFurnature from './Pages/NewFurnature';
import Footer from './components/Footer.js';
import Navbaritem from './components/navbar';
import Home from './Pages/Home';
import AddCart from './Pages/AddCart';
import OneCategoury from './Pages/OneCategoury';
import Fav from './Pages/Fav';
import MainCart from './Pages/MainCart';
import Categoure from './Pages/Categoure';
function App() {

  return (
    <BrowserRouter>
      <div className="container1">
        <Navbaritem />

        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={"/newfurnature"} component={NewFurnature} />
          <Route exact path={"/Categoure"} component={Categoure} />
          <Route exact path={"/fav"} component={Fav} />
          <Route exact path={"/AddCart/:id"} component={AddCart} />
          <Route exact path={"/Cart"} component={MainCart} />
          <Route exact path={"/OneCategoury/:name"} component={OneCategoury} />


        </Switch>

        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
