import './App.css';
import sofa from './Pages/Sofa';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewFurnature from './Pages/NewFurnature';
import CoffeTable from './Pages/CoffeTable';
import Chair from './Pages/Chair';
import Light from './Pages/Light';
import Footer from './Pages/Footer';
import Navbaritem from './components/navbar';
import Home from './Pages/Home';


function App() {

  return (
    <BrowserRouter>
      <div className="container1">
        <Navbaritem />
        <Switch>
          <Route exact path={'/'} component={Home } />
          <Route exact path={"/newfurnature"} component={NewFurnature} />
          <Route exact path={"/sofa"} component={sofa} />
          <Route exact path={"/coffetable"} component={CoffeTable} />
          <Route exact path={"/chair"} component={Chair} />
          <Route exact path={"/light"} component={Light} />



        </Switch>
        <Footer />
      </div>

    </BrowserRouter>


  );
}

export default App;
