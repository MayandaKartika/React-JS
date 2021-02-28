import React from "react";
import Card from "../Components/Card";
import $, { event } from "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
class BigDay extends React.Component{
    constructor(){
        super()
            this.state = {
                hari: [
                    {
                        nomer: 1, tanggal: "10 Januari", peringatan:"Hari Sejuta Pohon",
                        gambar: "https://isyf.or.id/wp-content/uploads/2018/01/S__1597450-600x600.jpg"
                    },{
                        nomer: 2, tanggal: "21 Februari", peringatan:"Hari Peduli Sampah Nasional",
                        gambar:"https://1.bp.blogspot.com/-NQU6u3Eq0MY/YCdUJoEOEvI/AAAAAAAAXwg/F0zxbxNeCLgUNPpv27ZLvNCA9mqf8728QCLcBGAsYHQ/s2048/Hari%2BPeduli%2BSampah%2BNasional-11.jpg"
                    },{
                        nomer: 3, tanggal: "22 Maret", peringatan:"Hari Air Sedunia",
                        gambar:"https://i.pinimg.com/originals/85/bf/e9/85bfe9b689d86878aae1f561cbc771c5.png"
                    },{
                        nomer: 4, tanggal: "22 April", peringatan:"Hari Bumi",
                        gambar:"https://assets-a1.kompasiana.com/statics/files/2014/04/1398164874671384389.jpg?t=o&v=800"
                    },{
                        nomer: 5, tanggal: "22 Mei", peringatan:"Hari Keanekaragaman Hayati Internasional",
                        gambar:"http://www.semarangkota.go.id/packages/upload/photo/2019-05-22/WhatsApp-Image-2019-05-22-at-09.40.36.jpeg"
                    },{
                        nomer: 6, tanggal: "5 Juni", peringatan:"Hari Lingkungan Hidup Sedunia",
                        gambar:"https://environment-indonesia.com/wp-content/uploads/2015/06/World_Environment_Day_Wallpapers.jpg"
                    },{
                        nomer: 7, tanggal: "26 Juli", peringatan:"Hari Mangrove Sedunia",
                        gambar:"https://pbs.twimg.com/media/Ed1IRr7UMAEya-B.jpg"
                    },{
                        nomer: 8, tanggal: "10 Agustus", peringatan:"Hari Konserasi Alam Nasional",
                        gambar:"https://alamendah.files.wordpress.com/2015/08/hari-konservasi-alam-nasional.jpg?w=640"
                    },{
                        nomer: 9, tanggal: "16 September", peringatan:"Hari Pelestarian Lapisan Ozon Internasional",
                        gambar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6lxPqeeIErfmWgQhQHP1JZvoon-5qSO7c0A&usqp=CAU"
                    },{
                        nomer: 10, tanggal: "5 November", peringatan:"Hari Cinta Puspa dan Satwa Nasional",
                        gambar:"https://earthhourdepok.files.wordpress.com/2016/11/hcpsn.jpg?w=1000"
                    }
                   
                ],
                action: "",
                nomer: "",
                tanggal: "",
                peringatan: "",
                gambar: "",
                selectedItem: null,
                keyword: "",
                filterHari: []
            }
            this.state.filterHari = this.state.hari
        }
        Add = () => {
            // menampilkan komponen modal
            $("#modal_hari").modal("show")
            this.setState({
               nomer: Math.random(1,10000000),
               tanggal: "",
               peringatan:"",
               gambar: "",
               action: "insert"
            })
        }
        Edit = (item) => {
           // menampilkan komponen modal
           $("#modal_hari").modal("show")
        this.setState({
            nomer: item.nomer,
            tanggal: item.tanggal,
            peringatan: item.peringatan,
            gambar: item.gambar,
            action: "update",
            selectedItem: item
            })
        }
        Save = (event) => {
            event.preventDefault();
            // menampung data state hari
            let tempHari = this.state.hari
            if (this.state.action === "insert") {
                // menambah data baru
                tempHari.push({
                    nomer: this.state.nomer,
                    tanggal: this.state.tanggal,
                    peringatan: this.state.peringatan,
                    gambar: this.state.gambar,
                })
            }else if (this.state.action === "update") {
                // menyimpan perubahan data
                let index = tempHari.indexOf(this.state.selectedItem)
                tempHari[index].nomer = this.state.nomer
                tempHari[index].tanggal = this.state.tanggal
                tempHari[index].peringatan = this.state.peringatan
                tempHari[index].gambar = this.state.gambar
            }
            this.setState({hari : tempHari})
            // menutup komponen modal-hari
            $("#modal_hari").modal("hide")
        }
        Drop = (item) => {
            // memberi konfirmasi untuk menghapus data
            if (window.confirm("Apakah anda yakin untuk menghapus data ini?")) {
                // menghapus data
                let tempHari = this.state.hari
                // posisi index yang akan dihapus
                let index = tempHari.indexOf(item)
                // hapus data
                tempHari.splice(index, 1)
                this.setState({hari: tempHari})
            }
        }
        searching = event => {
            if (event.keyCode === 13) {
                // code enter = 13
                let keyword = this.state.keyword.toLowerCase()
                let tempHari = this.state.hari
                let results = tempHari.filter(item => {
                    return item.tanggal.toLowerCase().includes(keyword) ||
                    item.peringatan.toLowerCase().includes(keyword) 
                })
                this.setState({filterHari: results})
            }
        }
    render(){
        return(
            <div className="container">
                <input type="text" className="form-control my-2" placeholder="Search"
                value={this.state.keyword}
                onChange={ev => this.setState({keyword: ev.target.value})}
                onKeyUp={ev => this.searching(ev)} />
               <div className="row">
               { this.state.filterHari.map( (item, index) => (
                       <Card
                       tanggal={item.tanggal}
                       peringatan={item.peringatan}
                       gambar={item.gambar}
                       onEdit={() => this.Edit(item)}
                       onDrop={() => this.Drop(item)}
                       />
                   ))}
               </div>
               <button className="btn btn-success" onClick={() => this.Add()}>
                   Add
               </button>
               {/* komponen modal sebagai kontrol manipulasi data*/}
               <div className="modal" id="modal_hari">
                   <div className="modal-dialog">
                       <div className="modal-content">
                           {/* modal header */}
                           <div className="modal-header">
                               Form Hari
                           </div>
                           {/* modal body */}
                           <div className="modal-body">
                               <form onSubmit={ev => this.Save(ev)}>
                                   Tanggal
                                   <input type="text" className="form-control mb-2" 
                                   value={this.state.tanggal}
                                   onChange={ev => this.setState({tanggal: ev.target.value})}
                                   required />
                                   Peringatan
                                   <input type="text" className="form-control mb-2" 
                                   value={this.state.peringatan}
                                   onChange={ev => this.setState({peringatan: ev.target.value})}
                                   required />
                                   Gambar
                                   <input type="url" className="form-control mb-2" 
                                   value={this.state.gambar}
                                   onChange={ev => this.setState({gambar: ev.target.value})}
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
export default BigDay;