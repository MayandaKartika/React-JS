import React from "react";
import Navbar from "./Components/Navbar";
import {Switch, Route} from "react-router-dom";

// import semua halaman yang akan ditampilkan
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Cart from "./Pages/Cart";

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery}/>
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    )
  }
}
export default App;