import React from 'react';
import Navbar from "./Component/navbar";
import {Switch, Route} from "react-router-dom";
import Beranda from './Component/beranda';
import Gallery from './Component/gallery';
import HariBesar from './Component/haribesar';

class App extends React.Component{
  render() {
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Beranda} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/haribesar" component={HariBesar} />
        </Switch>
      </div>
    )
  }
}

export default App;