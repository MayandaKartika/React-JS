import React, {Component} from 'react';
import Alert from './Alert';

class Bmi extends Component {

	constructor(props){
		super(props);
		this.state = {
			berat: '45',
			tinggi: '150',
			hasil: "Anda Kurus"
		};

		this.BeratChange = this.BeratChange.bind(this);
		this.TinggiChange = this.TinggiChange.bind(this);
		this.hitungBmi = this.hitungBmi.bind(this);
	}

	BeratChange(event) {
		this.setState({berat: event.target.value})
	}

	TinggiChange(event){
		this.setState({tinggi: event.target.value})
	}
	
	hitungBmi = (event) => {
		let tinggi = this.state.tinggi;
		let berat = this.state.berat;

		// kalkulasi
		tinggi /= 100; // Untuk mengkonversi cm ke m
		let hasil = berat / (tinggi*tinggi);

		// ifelse
		if(hasil <= 18.5){
			this.setState({hasil: "Anda Kurang berat badan"}) // menggunakan setState untuk mengubah state
		} else if(hasil >= 18.5 && hasil <= 22.9){
			this.setState({hasil: "Anda Normal"})
		} else if(hasil >= 23 && hasil <= 25){
			this.setState({hasil: "Anda Obesitas"})
		} else{
			this.setState({hasil: "Anda Tidak Normal"})
		}
			
		event.preventDefault();
	}

	render(){
		return(
			<div className="card col-sm-5 mx-auto m-5">
				<div className="card-header bg-light text-center text-black">
					<h4>Body Mass Index</h4>
				</div>
				<div className="card-body">
				<div class="form-group row">
          <label for="input-angka" class="col-sm-4 col-form-label">Berat (kg)</label>
          <div class="col-sm-8">
          <input type="number" className="form-control" value={this.state.berat} onChange={this.BeratChange}/>
          </div>
       </div>
       <div class="form-group row">
          <label for="input-angka" class="col-sm-4 col-form-label">Tinggi (m)</label>
          <div class="col-sm-8">
          <input type="number" className="form-control" value={this.state.tinggi} onChange={this.TinggiChange}/>
          </div>
       </div>
				</div>
				<div className="card-footer">
					<button className="form-control btn btn-info text-white" onClick={this.hitungBmi} >
						Hitung
					</button>
					<h4 className="text-center mt-4">Hasil</h4>
					{/* Alert */}
					<Alert hasil={this.state.hasil}/>
				</div>
			</div>
		);
	}
}

export default Bmi;