1.
var rows1 = 5;
var i= 0;
while(i < rows1) {

  console.log('*');
  i++;
}

2.
var rows2 = 5;
var i= 0;
var j= 0;
var bintang= "";
while(i < rows2) {
 while(j < rows2) {
  bintang += '*';
  j++;
 }
  console.log(bintang);
  i++;
}

3.
var rows3 = '*';
while(rows3.length <= 5) {
  console.log(rows3);
  rows3 = rows3 + '*';
}
