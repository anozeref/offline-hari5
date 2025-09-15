let bil=[1, 4, 6, 8, 9, 11, 15, 16, 19, 20];
bil.forEach(num=> {
console.log(num);});
let hasil = bil.map(num=>num*num);
console.log(hasil);
let seleksi = bil.filter(num=>num>10);
console.log(seleksi);
let jumlah = seleksi.reduce(getSum, 0);
console.log(jumlah);
function getSum(total, num) {
  return total + Math.round(num);
}

let huruf = ['a','b','c','d','e'];

huruf.forEach(str=>{
    console.log(str);
})
let hasil2=huruf.map(str=>str+"aba");
console.log(hasil2);

