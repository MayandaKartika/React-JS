import React from 'react';
import dunia from '../Images/world.png';
import g1 from "../Images/1.jpg";
import g2 from "../Images/2.jpeg";
import g3 from "../Images/3.jpeg";
import g4 from "../Images/4.jpg";
import g5 from "../Images/5.jpg";
import g6 from "../Images/6.jpg";

class Gallery extends React.Component{
    render(){
        return(
            <div className="container">
                <center><h1><img alt="logo" src={dunia} width="50" height="50"/> Gallery</h1></center>
                <img src={g1} class="rounded " alt="g1" height="250px" width="370px"/>
                <img src={g2} class="rounded " alt="g2" height="250px" width="370px"/>
                <img src={g3} class="rounded " alt="g3" height="250px" width="370px"/>
                <img src={g4} class="rounded " alt="g4" height="250px" width="370px"/>
                <img src={g5} class="rounded " alt="g5" height="250px" width="370px"/>
                <img src={g6} class="rounded " alt="g5" height="250px" width="370px"/>
                
               
            </div>
        )
    }
}

export default Gallery;