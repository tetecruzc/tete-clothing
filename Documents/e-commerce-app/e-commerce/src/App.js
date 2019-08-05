import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch,Route} from 'react-router-dom';


/*const Hats = props =>{
  console.log(props);
  return (
    <div>
    <h1>HATSSS {props.match.params.id}</h1>
  </div>
  );
};*/

function App() {
  return (
    <div>
     <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route exact path='/shop' component={ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;
