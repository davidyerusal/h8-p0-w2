var tanggal= 9; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan= 6; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun= 2039; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {
 case 1  : bulan= 'januari'; break;
 case 2  : bulan= 'februari'; break;
 case 3  : bulan= 'maret'; break;
 case 4  : bulan= 'april'; break;
 case 5  : bulan= 'mei'; break;
 case 6  : bulan= 'juni'; break;
 case 7  : bulan= 'juli'; break;
 case 8  : bulan= 'agustus'; break;
 case 9  : bulan= 'september'; break;
 case 10 : bulan= 'oktober'; break;
 case 11 : bulan= 'november'; break;
 case 12 : bulan= 'desember'; break;
 default : 'bukan bulan'; break;
}
console.log(tanggal + ' ' + bulan + ' ' + tahun);
