import React from "react";
import Card from "../Components/Card";
import $, { event } from "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
class Gallery extends React.Component{
    constructor(){
        super()
            this.state = {
                buku: [
                    {
                        kodebuku:"12345", judul:"About Love", penulis:"Tere Liye",
                        penerbit:"CV Nusa Bangsa", harga: 90000,
                        cover:"https://drive.google.com/uc?id=1lMmA8aIAebIpkGwqOoqYM7jeQOF_Q2f3"
                    },
                    {
                        kodebuku:"23456", judul:"Rindu", penulis:"Tere Liye",
                        penerbit:"CV Nusa Bangsa", harga: 95000,
                        cover:"https://drive.google.com/uc?id=1VPEh3h15NP7HO6i42HbgBA2DZON5bYax"
                    },
                    {
                        kodebuku:"34567", judul:"Nebula", penulis:"Tere Liye",
                        penerbit:"CV Nusa Bangsa", harga: 85000,
                        cover:"https://drive.google.com/uc?id=1jrZdvKKzi_3DfrJHXmy-t-2NqQL8MVba"
                    }
                ],
                action: "",
                kodebuku: "",
                judul: "",
                penulis: "",
                penerbit: "",
                harga: 0,
                cover: "",
                selectedItem: null,
                keyword: "",
                filterBuku: [],
                user: ""
            }
            this.state.filterBuku = this.state. buku
        }
        Add = () => {
            // menampilkan komponen modal
            $("#modal_buku").modal("show")
            this.setState({
               kodebuku: Math.random(1,10000000),
               judul: "",
               penulis: "",
               penerbit: "",
               cover: "",
               harga: 0,
               action: "insert"
            })
        }
        Edit = (item) => {
           // menampilkan komponen modal
           $("#modal_buku").modal("show")
           this.setState({
              kodebuku: item.kodebuku,
              judul: item.judul,
              penulis: item.penulis,
              penerbit: item.penerbit,
              cover: item.cover,
              harga: item.harga,
              action: "update",
              selectedItem: item
            })
        }
        Save = (event) => {
            event.preventDefault();
            // menampung data state buku
            let tempBuku = this.state.buku
            if (this.state.action === "insert") {
                // menambah data baru
                tempBuku.push({
                    kodebuku: this.state.kodebuku,
                    judul: this.state.judul,
                    penulis: this.state.penulis,
                    penerbit: this.state.penerbit,
                    cover: this.state.cover,
                    harga: this.state.harga,
                })
            }else if (this.state.action === "update") {
                // menyimpan perubahan data
                let index = tempBuku.indexOf(this.state.selectedItem)
                tempBuku[index].kodebuku = this.state.kodebuku
                tempBuku[index].judul = this.state.judul
                tempBuku[index].penulis = this.state.penulis
                tempBuku[index].penerbit = this.state.penerbit
                tempBuku[index].cover = this.state.cover
                tempBuku[index].harga = this.state.harga
            }
            this.setState({buku : tempBuku})
            // menutup komponen modal-buku
            $("#modal_buku").modal("hide")
        }
        Drop = (item) => {
            // memberi konfirmasi untuk menghapus data
            if (window.confirm("Apakah anda yakin untuk menghapus data ini?")) {
                // menghapus data
                let tempBuku = this.state.buku
                // posisi index yang akan dihapus
                let index = tempBuku.indexOf(item)
                // hapus data
                tempBuku.splice(index, 1)
                this.setState({buku: tempBuku})
            }
        }
        searching = event => {
            if (event.keyCode === 13) {
                // code enter = 13
                let keyword = this.state.keyword.toLowerCase()
                let tempBuku = this.state.buku
                let results = tempBuku.filter(item => {
                    return item.judul.toLowerCase().includes(keyword) ||
                    item.penulis.toLowerCase().includes(keyword) ||
                    item.penerbit.toLowerCase().includes(keyword)
                })
                this.setState({filterBuku: results})
            }
        }

        setUser = () => {
            //cek eksistensi dari session storage
            if (localStorage.getItem("user") === null) {
              //kondisi jika session storage "user" belum dibuat
              let prompt = window.prompt("Masukkan Nama anda","")
              if (prompt === null || prompt === "") {
                  //jika user tidak mengisi namanya
                  this.setUser()
              }else{
                  // jika user telah mengisikan namanya

                  //simpan nama user ke session storage
                  localStorage.setItem("user", prompt)
                  //simpan nama user ke state.user
                  this.setState({user: prompt})
              }  
            }else{
                //kondisi saat session storage "user" telah dibuat
                let name = localStorage.getItem("user")
                this.setState({user: name})
            }
        }

        addToCart = (selectedItem) => {
            //membuat sebuah variabel untuk mmenampung cart sementara
            let tempCart = []
            //cek eksistensi dari data cart pada localstorage
            if (localStorage.getItem("cart") !== null) {
                tempCart = JSON.parse(localStorage.getItem("cart"))
                //JSON.parse() digunakan untuk mengonversi dari string -> array object
            }
            //cek data yg dipilih user ke keranjang belanja
            let existItem = tempCart.find(item => item.kodebuku === selectedItem.kodebuku)
            if (existItem) {
                //jika item dipilih ada pada keranjang belanja
                window.alert("Anda telah memilih item ini")
            }else{
                //user diminta memasukkan jumlah item yg dibeli
                let promptJumlah = window.prompt("Masukkan jumlah item yang dibeli","")
                if (promptJumlah !== null && promptJumlah !== "") {
                    //jika user memasukkan jumlah item yg dibeli

                    //menambahkan properti "jumlahBeli" pada item yg dipilih
                    selectedItem.jumlahBeli = promptJumlah
                    //masukkan item yg dipilih ke dalam cart
                    tempCart.push(selectedItem)
                    //simpan array tempCart ke loclstorage
                    localStorage.setItem("cart", JSON.stringify(tempCart))
                }
            }
        }

        componentDidMount(){
            //fungsi yg dijalankan setelah fungsi render dieksekusi
            this.setUser()
        }

    render(){
        return(
            <div className="container">
                <h4 className="text-info my-2">
                    Nama Pengguna: {this.state.user}
                </h4>
                <input type="text" className="form-control my-2" placeholder="Search"
                value={this.state.keyword}
                onChange={ev => this.setState({keyword: ev.target.value})}
                onKeyUp={ev => this.searching(ev)} />
               <div className="row">
               { this.state.filterBuku.map( (item, index) => (
                       <Card
                       judul={item.judul}
                       penulis={item.penulis}
                       penerbit={item.penerbit}
                       harga={item.harga} 
                       cover={item.cover}
                       onEdit={() => this.Edit(item)}
                       onDrop={() => this.Drop(item)}
                       onCart={() => this.addToCart(item)}
                       />
                   ))}
               </div>
               <button className="btn btn-success" onClick={() => this.Add()}>
                   Add
               </button>
               {/* komponen modal sebagai kontrol manipulasi data*/}
               <div className="modal" id="modal_buku">
                   <div className="modal-dialog">
                       <div className="modal-content">
                           {/* modal header */}
                           <div className="modal-header">
                               Form Buku
                           </div>
                           {/* modal body */}
                           <div className="modal-body">
                               <form onSubmit={ev => this.Save(ev)}>
                                   Judul Buku
                                   <input type="text" className="form-control mb-2" 
                                   value={this.state.judul}
                                   onChange={ev => this.setState({judul: ev.target.value})}
                                   required />
                                   Penulis Buku
                                   <input type="text" className="form-control mb-2" 
                                   value={this.state.penulis}
                                   onChange={ev => this.setState({penulis: ev.target.value})}
                                   required />
                                   Penerbit Buku
                                   <input type="text" className="form-control mb-2" 
                                   value={this.state.penerbit}
                                   onChange={ev => this.setState({penerbit: ev.target.value})}
                                   required />
                                   Harga Buku
                                   <input type="number" className="form-control mb-2" 
                                   value={this.state.harga}
                                   onChange={ev => this.setState({harga: ev.target.value})}
                                   required />
                                   Cover Buku
                                   <input type="url" className="form-control mb-2" 
                                   value={this.state.cover}
                                   onChange={ev => this.setState({cover: ev.target.value})}
                                   required />
                                   <button className="btn btn-info btn-block" type="submit">
                                       Save
                                   </button>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
export default Gallery;