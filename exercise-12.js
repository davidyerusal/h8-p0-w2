function konversiMenit(menit) {
var detik = menit % 60;
var menit = (menit - detik)/60;
return menit + ':'  + ('0'+ detik).slice(-2);
}
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120)); 
