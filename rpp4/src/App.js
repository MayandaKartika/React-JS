import React from "react";
import Navbar from "./Components/Navbar";
import {Switch, Route} from "react-router-dom";

// import semua halaman yang akan ditampilkan
import Home from "./Pages/Home";
import About from "./Pages/About";
import BigDay from "./Pages/BigDay";
import Shopee from "./Pages/Product";

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/bigday" component={BigDay} />
          <Route path="/product" component={Shopee} />
        </Switch>
      </div>
    )
  }
}
export default App;