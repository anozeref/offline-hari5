const prompt = require("prompt-sync")({ sigint: true });

let absen = [
    { nama: "Fikry", alamat: "Tarkid", HP: "082318181" }
];

console.log("Hai~Selamat Datang di Program Data Siswa PBL Node.JS dan React");

let pilihan;

do {
    console.log("\nMenu:");
    console.log("1. Tampilkan Data");
    console.log("2. Tambah Data");
    console.log("3. Hapus Data");
    console.log("4. Cari Data");
    console.log("5. Keluar");

    pilihan = prompt("Masukkan pilihan (1-5): ");

    switch (pilihan) {
        case "1":
            console.log("\nData Siswa:");
            absen.forEach((siswa, index) => {
                console.log(`${index + 1}. Nama: ${siswa.nama}, Alamat: ${siswa.alamat}, HP: ${siswa.HP}`);
            });
            break;

        case "2":
            let namaBaru = prompt("Masukkan Nama: ");
            let alamatBaru = prompt("Masukkan Alamat: ");
            let HPBaru = prompt("Masukkan HP: ");
            absen.push({ nama:namaBaru, alamat:alamatBaru, HP:HPBaru });
            console.log(`Data ${namaBaru} berhasil ditambahkan!`);
            break;

        case "3":
            let hapusIndex = prompt("Masukkan nomor data yang ingin dihapus: ") - 1;
            if (hapusIndex >= 0 && hapusIndex < absen.length) {
                let hapusNama = absen[hapusIndex].nama;
                absen.splice(hapusIndex, 1);
                console.log(`Data ${hapusNama} berhasil dihapus!`);
            } else {
                console.log("Nomor data tidak valid!");
            }
            break;

        case "4":
            let cariNama = prompt("Masukkan nama yang ingin dicari: ");
            let hasil = absen.filter(siswa => siswa.nama.toLowerCase() === cariNama.toLowerCase());
            if (hasil.length > 0) {
                console.log("Data ditemukan:");
                hasil.forEach(siswa => console.log(`Nama: ${siswa.nama}, Alamat: ${siswa.alamat}, HP: ${siswa.HP}`));
            } else {
                console.log("Data tidak ditemukan!");
            }
            break;

        case "5":
            console.log("Terima kasih telah menggunakan program!");
            break;

        default:
            console.log("Pilihan tidak valid! Silakan pilih 1-5.");
    }

} while (pilihan !== "5");
