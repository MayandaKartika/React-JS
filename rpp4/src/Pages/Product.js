import React from 'react';
import $ from 'jquery';

class shopee extends React.Component{
    constructor(){
        super()
        this.state={
            produk: [
                {
                    nomer:1, nama:"Manga", harga:50000, jumlah:1, total:"50000", 
                    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8z4wZDPZJ2um0M0fr0ZNGLlPLVv8aNgrORA&usqp=CAU"
                },{
                    nomer:2, nama:"Kaos", harga:90000, jumlah:3, total:"270000", 
                    gambar: "https://s1.bukalapak.com/img/69781341401/original/Kaos_Distro_Anime_Game_PUBG_.jpg"
                },{
                    nomer:3, nama:"Action Figure Levi Ackerman", harga:350000, jumlah:1, total:"350000", 
                    gambar: "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/1/27/86253616/86253616_a0bedcb9-b6e1-4adf-8bb0-a5d4d6d7a821_674_674.jpg"
                },{
                    nomer:4, nama:"Hiasan Gantung Anime Bungou Stray Dogs", harga:90000, jumlah:1, total:"90000", 
                    gambar: "https://cf.shopee.co.id/file/1df715d1f7ffcf2b3c6cadfc593619f0"
                }
            ],
            action:"",
            nomer:0,
            nama:"",
            harga:0,
            jumlah:0,
            gambar:"",
            total: "",
            selectedItem: null,
            filterProduk: []
        }
        this.state.filterProduk = this.state.produk
    }
   
    Add = () => {
        $("#modal_produk").modal("show")
        this.setState({
            nomer:0,
            nama: "",
            harga:0,
            jumlah:0,
            gambar:"",
            total:"",
            action: "insert"
        })
    }
    Edit = (item) => {
        $("#modal_produk").modal("show")
        this.setState({
            nomer:item.nomer,
            nama: item.nama,
            harga:item.harga,
            jumlah:item.jumlah,
            gambar:item.gambar,
            total:item.total,
            action: "update",
            selectedItem: item
        })
    }
    Save = (event) => {
        event.preventDefault();
        let tempProduk = this.state.produk

        if (this.state.action === "insert") {
            tempProduk.push({
                nomer: this.state.nomer,
                nama: this.state.nama,
                harga: this.state.harga,
                jumlah: this.state.jumlah,
                gambar: this.state.gambar,
                total: this.state.total,
            })
        }else if(this.state.action === "update"){
            let index = tempProduk.indexOf(this.state.selectedItem)
            tempProduk[index].nomer = this.state.nomer
            tempProduk[index].nama = this.state.nama
            tempProduk[index].harga = this.state.harga
            tempProduk[index].jumlah = this.state.jumlah
            tempProduk[index].gambar = this.state.gambar
            tempProduk[index].total = this.state.total
        }
        this.setState({produk : tempProduk})
        $("#modal_produk").modal("hide")
    }
    Drop = (item) => {
        if(window.confirm("Apakah anda yakin untuk menghapus data ini?")){
            let tempProduk = this.state.produk
            let index = tempProduk.indexOf(item)
            tempProduk.splice(index, 1)
            this.setState({produk: tempProduk})
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <table className="table table-bordered m-4">
                        <thead className="table-dark text-center">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Gambar Produk</th>
                            <th scope="col">Nama Produk</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Jumlah</th>
                            <th scope="col">Total Harga</th>
                            <th scope="col">Edit Delete</th>
                            </tr>
                        </thead>
                        {this.state.filterProduk.map((item, index) => (
                        <tbody className="text-center">
                            <tr>
                            <th scope="row">{item.nomer}</th>
                            <th><img src={item.gambar} className="img" height="200"/></th>
                            <th>{item.nama}</th>
                            <th>{item.harga}</th>
                            <th>{item.jumlah}</th>
                            <th>{item.total}</th>
                            <button className="btn btn-sm btn-primary m-2" onClick={ () => this.Edit(item)}>Edit</button>
                            <button className="btn btn-sm btn-danger m-2" onClick={ () => this.Drop(item)}>Delete</button>
                            </tr>
                        </tbody>
                        ))}
                    </table>
                </div>
                <button className="btn btn-success m-2" onClick={() => this.Add()}>
                    Add
                </button>
                <div className="modal" id="modal_produk">
                <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">Form List Keranjang Belanja</div>
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama Produk
                                    <input type="text" className="form-control mb-2" value={this.state.nama}
                                    onChange={ ev => this.setState({nama: ev.target.value})} required />
                                    Harga
                                    <input type="text" className="form-control mb-2" value={this.state.harga}
                                    onChange={ ev => this.setState({harga: ev.target.value})} required />
                                    Jumlah
                                    <input type="text" className="form-control mb-2" value={this.state.jumlah}
                                    onChange={ ev => this.setState({jumlah: ev.target.value})} required />
                                    Gambar
                                    <input type="url" className="form-control mb-2" value={this.state.gambar}
                                    onChange={ ev => this.setState({gambar: ev.target.value})} required />
                                    Total
                                     <input type="text" className="form-control mb-2" value={this.state.total}
                                    onChange={ ev => this.setState({total: ev.target.value})} required />
                                    <button className="btn btn-info btn-block " type="submit">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        )
    }
}

export default shopee; 