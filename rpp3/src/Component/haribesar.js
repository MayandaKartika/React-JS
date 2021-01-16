import React from 'react';
import tanggal from '../Images/earth-day.png';

class HariBesar extends React.Component{
    render(){
        return(
            <div className="container">
                <center><h2><img alt="logo" src={tanggal} width="50" height="50"/> Peringatan Hari Besar Lingkungan Hidup</h2></center>
                
                <table class="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Hari Peringatan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>10 Januari</td>
                    <td>Hari Sejuta Pohon</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>21 Februari</td>
                    <td>Hari Peduli Sampah Nasional</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>22 Maret</td>
                    <td>Hari Air Sedunia</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>22 April</td>
                    <td>Hari Bumi</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>22 Mei</td>
                    <td>Hari Keanekaragaman Hayati Internasional</td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                    <td>5 Juni</td>
                    <td>Hari lingkungan Hidup Sedunia</td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                    <td>26 Juli</td>
                    <td>Hari Mangrove Sedunia</td>
                    </tr>
                    <tr>
                    <th scope="row">8</th>
                    <td>10 Agustus</td>
                    <td>Hari Konservasi Alam Nasional</td>
                    </tr>
                    <tr>
                    <th scope="row">9</th>
                    <td>7 September</td>
                    <td>Hari Udara Bersih Internasional</td>
                    </tr>
                    <tr>
                    <th scope="row">10</th>
                    <td>16 September</td>
                    <td>Hari Pelestarian Lapisan Ozon Internasional</td>
                    </tr>
                    <tr>
                    <th scope="row">11</th>
                    <td>21 September</td>
                    <td>Hari Bersih-bersih Sedunia (World Cleanup Day)</td>
                    </tr>
                    <tr>
                    <th scope="row">12</th>
                    <td> 5 November </td>
                    <td>Hari Cinta Puspa dan Satwa Nasional</td>
                    </tr>
                    <tr>
                    <th scope="row">13</th>
                    <td>28 November</td>
                    <td>Hari Menanam Pohon Indonesia</td>
                    </tr>
                    <tr>
                    <th scope="row">14</th>
                    <td>4 Desember </td>
                    <td>Hari Konservasi Kehidupan Liar</td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}

export default HariBesar;