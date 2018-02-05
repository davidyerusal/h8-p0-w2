1.
var angka = 2 ;
console.log('LOOPING PERTAMA');
while(angka < 22) {
  console.log(angka + '- I love koding');
  angka+=2;
}

var angka = 20 ;
console.log('LOOPING KEDUA');
while(angka > 0) {
  console.log(angka + '- I will become fullstack developer');
  angka-=2;
}

2.
console.log('LOOPING PERTAMA');
for(var angka = 2; angka < 22; angka += 2) {
  console.log(angka + '- I love koding');
}

console.log('LOOPING KEDUA');

for(var angka = 20; angka > 0; angka -= 2) {
  console.log(angka + '- I will become fullstack developer');
}

3.
for(var i = 1; i <= 100 ; i++) {
  if(i%2 !==0) {
    console.log(i + ' adalah GANJIL');
  }else {
    console.log(i + ' adalah GENAP');
  }
}


for(var i = 1; i <= 100; i+=2 ) {
 if(i%3 ===0) {
   console.log(i + ' kelipatan 3');
 }
}


for(var i = 1; i <= 100; i+=5 ) {
  if(i%6 ===0) {
    console.log(i + ' kelipatan 6');
  }
}

for (var i = 1; i <= 100; i+=9 ) {
  if(i%10 ===0) {
    console.log(i + ' kelipatan10');
  }
}
