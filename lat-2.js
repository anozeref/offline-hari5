let mahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 70 },
];
console.log('\nDaftar Nilai Siswa:');
mahasiswa.forEach(mhs=>{
    console.log(`${mhs.nama} - Nilai: ${mhs.nilai}`);
});

let daftarnama =mahasiswa.map(mhs => mhs.nama);
console.log('\nDaftar Nama Siswa:', daftarnama);

let urutnilai = [...mahasiswa].sort((a,b)=>b.nilai-a.nilai);
console.log('\nUrutan Berdasarkan Nilai Tertinggi>Terendah): ');
urutnilai.forEach(mhs=>console.log(`${mhs.nama} - Nilai: ${mhs.nilai}`));

let kelulusan = mahasiswa.map(item => {
  return {
    ...item,
    kelulusan: item.nilai >= 60 ? "Lulus" : "Tidak Lulus"
  };
});
console.log(kelulusan);

let carinama = prompt("Masukan nama yang akan ditelusuri: ");
let hasilcari = kelulusan.find(mhs => mhs.nama.toLowerCase() === carinama.toLowerCase());
if (hasilcari){
    console.log(`/n Data ditemukan : ${hasilcari.nama} - Nilai: ${hasilcari.nilai} - Status: ${hasilcari.kelulusan}`);
} else{
    console.log('/n Data Tidak Ada');
}