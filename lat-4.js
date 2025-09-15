let mhs1= {
    nama:'Fikry', 
    Energi:9, makan: function(porsi){
        this.energy=this.energy+(porsi);
        console.log(`Halo ${this.nama},Selamat Makan!`);
    }
}
let mhs2 = {
    nama: 'Haryono',
    energi:20,
    makan:function(porsi){
        this.energi=this.energi+porsi;
        console.log(`Halo${this.nama}, Selamat Makan! ${pro.harga}`);
    }
}

//funsction declraration
function mhs(nama, energi) {
    let mhs = {};
    mhs.nama = nama;
    mhs.energi = energi;

    mhs.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    }

    mhs.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Main!`);
    }

    return mhs;
}

let aku = mhs('aku', 12);
let kamu = mhs('kamu', 19);

aku.makan(5);
kamu.main(2);
