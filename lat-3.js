const prompt = require("prompt-sync")({sigint: true});
let produk=[
    {nama: "Laptop", harga:1200000},
    {nama: "Poco X4", harga:3500000},
    {nama: "Tablet Samsung", harga:5000000},
    {nama: "Smartwatch", harga:1500000}]

    console.log('\nDaftar harga Produk:');
produk.forEach(pro=>{
    console.log(`${pro.nama} - harga: ${pro.harga}`);
});

let daftarnama =produk.map(pro => pro.nama);
console.log('\nDaftar Nama Produk:', daftarnama);

//Sortir harga
let urutharga = [...produk].sort((a,b)=>b.harga-a.harga);
console.log('\nUrutan Berdasarkan harga Tertinggi>Terendah): ');
urutharga.forEach(pro=>console.log(`${pro.nama} - harga: ${pro.harga}`));

//Kelulusan
let kelulusan = produk.map(item => {
  return {
    ...item,
    kelulusan: item.harga >= 40000000 ? "Mahal" : "Murah"
  };
});
console.log(kelulusan);

//Cari Nama
do {
  let carinama = prompt("Masukkan nama yang akan ditelusuri: ");
  let hasilcari = kelulusan.find(pro => pro.nama.toLowerCase() === carinama.toLowerCase());

  if (hasilcari) {
    console.log(`\nData ditemukan : ${hasilcari.nama} - harga: ${hasilcari.harga} - Status: ${hasilcari.kelulusan}`);
  } else {
    console.log('\nData Tidak Ada');
  }

  var ulang = prompt("Apakah Anda ingin mengulang proses? (y/n): ");
} while (ulang.toLowerCase() === "y");

console.log("Program selesai.");