function xo(str) {
   var x = str.match(/x/g).toString().length;
   var o = str.match(/o/g).toString().length;

   if(x===o) {
     return true;
   }else {
     return false;
   }
 }

 console.log(xo('xoxoxo'));
 console.log(xo('oxooxo'));
 console.log(xo('oxo'));
 console.log(xo('xxxooo'));
 console.log(xo('xoxooxxo'));
