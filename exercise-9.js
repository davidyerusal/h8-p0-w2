1.
function shoutOut() {
  return 'Halo Function!';
}

console.log(shoutOut());

2.
var num1 = 5;
var num2 = 6;
function calculateMultiply(num1, num2) {
  return num1 * num2;
}
console.log(calculateMultiply(num1, num2));

3.
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
function processSentence(name,age,address,hobby) {
 return "Nama saya" + ' ' + name + ' ' + "umur saya"+ ' ' + age + ' ' + "tahun" + ' ' + "alamat saya di" + ' '  + address + ' ' + "dan" + ' ' + "saya punya hobby yaitu" + ' ' + hobby;
}
console.log(processSentence(name,age,address,hobby));
