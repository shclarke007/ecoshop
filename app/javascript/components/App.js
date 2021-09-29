import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shops from './Shops/Shops';
import ShopItemData from './Shop/ShopItemData';
import About from './About/About';
import Learning from './Learning/Learning';
import Contact from './Contact/Contact';

const App = () => {
  document.body.style.margin = "0";
  return( 
  <Router>
    <Switch>
      <Route exact path="/" component={Shops} />
      <Route path="/about" component={About} />
      <Route path="/learning" component={Learning} />
      <Route path="/contact" component={Contact} />
      <Route path="/shops/:id" component={ShopItemData} />
    </Switch>
    
  </Router>
  )
}

export default App;
