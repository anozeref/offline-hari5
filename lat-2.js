const prompt = require("prompt-sync")({sigint: true});
let mahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 70 },
];
//Data Mhs
console.log('\nDaftar Nilai Siswa:');
mahasiswa.forEach(mhs=>{
    console.log(`${mhs.nama} - Nilai: ${mhs.nilai}`);
});

let daftarnama =mahasiswa.map(mhs => mhs.nama);
console.log('\nDaftar Nama Siswa:', daftarnama);

//Sortir Nilai
let urutnilai = [...mahasiswa].sort((a,b)=>b.nilai-a.nilai);
console.log('\nUrutan Berdasarkan Nilai Tertinggi>Terendah): ');
urutnilai.forEach(mhs=>console.log(`${mhs.nama} - Nilai: ${mhs.nilai}`));

//Kelulusan
let kelulusan = mahasiswa.map(item => {
  return {
    ...item,
    kelulusan: item.nilai >= 70 ? "Lulus" : "Tidak Lulus"
  };
});
console.log(kelulusan);

//Cari Nama
do {
  let carinama = prompt("Masukkan nama yang akan ditelusuri: ");
  let hasilcari = kelulusan.find(mhs => mhs.nama.toLowerCase() === carinama.toLowerCase());

  if (hasilcari) {
    console.log(`\nData ditemukan : ${hasilcari.nama} - Nilai: ${hasilcari.nilai} - Status: ${hasilcari.kelulusan}`);
  } else {
    console.log('\nData Tidak Ada');
  }

  var ulang = prompt("Apakah Anda ingin mengulang proses? (y/n): ");
} while (ulang.toLowerCase() === "y");

console.log("Program selesai.");