import React from 'react';
import info from '../Images/eco.png'
import desk from '../Images/ecology.png'

class Beranda extends React.Component{
    render(){
        return(
            <div className="jumbootron">
                <div className="container">
                <div className="card mb-3 ">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={info} alt="info" width="300px" height="300px"/>
                        </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h3 className="card-title">PENGERTIAN ADIWIYATA</h3>
                            <p className="card-text">Adiwiyata adalah supaya membangun program atau wadah yang baik dan ideal untuk mendapatkan ilmu pengetahuan dan berbagai norma
                            serta etika yang dapat menjadi dasar manusia menuju terciptanya kesejahteraan hidup untuk cita-cita pembangunan berkelanjutan.
                            Adiwiyata merupakan nama program pendidikan lingkungan hidup.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card mb-3 ">
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={desk} alt="desk" width="300px" height="300px"/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h3 className="card-title">TUJUAN ADIWIYATA</h3>
                            <p className="card-text">membentuk sekolah peduli dan berbudaya lingkungan yang mampu berpartisipasi serta melaksanakan upaya pelestarian lingkungan 
                            dan pembangunan berkelanjutan bagi kepentingan generasi sekarang dan generasi yang akan datang.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>  
            </div>
        )
    }
}

export default Beranda;