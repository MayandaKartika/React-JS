import React, {Component} from 'react';
import Bmi from './Components/Bmi';
import Cicilan from './Components/Cicilan';
import Konversi from './Components/Konversi';
import Ppn from './Components/Ppn';

class App extends Component{
  render(){
    return(
      <div className="parent-box">
        <div className="container">
          <div className="row">
            <Bmi/>
            <Cicilan/>
            <Ppn/>
            <Konversi/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;