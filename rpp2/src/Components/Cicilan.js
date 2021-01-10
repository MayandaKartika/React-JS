import React, {Component} from 'react';

class Cicilan extends Component {
    constructor(props){
        super(props);
        this.state = {
            nominal: '',
            bunga: '',
            periode: '12',
            hasil: ''
        };

        this.nominalChange = this.nominalChange.bind(this);
        this.bungaChange = this.bungaChange.bind(this);
        this.periodeChange = this.periodeChange.bind(this);
    }

    nominalChange(event){
        this.setState({nominal: event.target.value})
    }

    bungaChange(event){
        this.setState({bunga: event.target.value})
    }

    periodeChange(event){
        this.setState({periode: event.target.value})
    }

    hitung = (event)  => {
        let nominal = this.state.nominal;
        let bunga = this.state.bunga;
        let periode = this.state.periode;

        let b = bunga / 100;
        let Bbunga = (nominal * b) / periode; 
        let Cpokok = nominal / periode;
        let ApBulan = Cpokok + Bbunga;

        this.setState({hasil:"Rp. " + ApBulan + ",00"})

        event.preventDefault();
    }

    render(){
        return(
            <div className="card col-sm-5 mx-auto m-5">
				<div className="card-header text-center bg-primary text-white">
					<h4>Cicilan Bank</h4>
				</div>
				<div className="card-body">
                <div class="form-group row">         
        <label class="form-group-text" class="col-sm-3 col-form-label" >Nominal </label>
          <div class="col-sm-9">
          <input type="number" className="form-control" onChange={this.nominalChange}/>
          </div>
        </div>
        <div class="form-group row">         
        <label class="form-group-text" class="col-sm-3 col-form-label" >Bunga </label>
          <div class="col-sm-9">
          <input type="number" className="form-control" onChange={this.bungaChange}/>
          </div>
        </div>
        <div class="form-group row">
          <label class="form-group-text" class="col-sm-3 col-form-label">Periode </label>
          <div class="col-sm-9">
          <select class="custom-select" value={this.state.periode} onChange={this.periodeChange}>
            <option value="12">12 bulan</option>
            <option value="24">24 bulan</option>
            <option value="36">36 bulan</option>
          </select>
          </div>
        </div>
				<div className="card-footer">
					<button className="form-control btn btn-primary text-white" onClick={this.hitung}>
						Hitung
					</button>
                    <h4 className="text-center mt-4"></h4>
                    <input className="form-control mb-1" value={this.state.hasil} readOnly/>
				</div>
			</div>
            </div>
        );
    }
}

export default Cicilan;