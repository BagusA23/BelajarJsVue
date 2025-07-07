const mahasiswa = [
  { nama: "Bagus", ipk: 3.5, jurusan: "TI", semester: 6, aktif: true },
  { nama: "Dina", ipk: 2.9, jurusan: "SI", semester: 4, aktif: true },
  { nama: "Rudi", ipk: 3.8, jurusan: "TI", semester: 8, aktif: false },
  { nama: "Nia", ipk: 3.2, jurusan: "TI", semester: 2, aktif: true },
  { nama: "Fikri", ipk: 2.5, jurusan: "SI", semester: 6, aktif: false }
];


// 1. Tampilkan nama mahasiswa yang aktif
mahasiswa.forEach(mhs => {
    console.log(`Nama: ${mhs.nama}, semester: ${mhs.semester}, aktif: ${mhs.aktif}`);
});


// 2. Buat array baru yang berisi nama mahasiswa
const namaMahasiswa = mahasiswa.map(mhs => mhs.nama);
console.log(namaMahasiswa);

// 3. Filter mahasiswa
const mahasiswaTI = mahasiswa.filter(mhs => mhs.jurusan === "TI");
console.log(mahasiswaTI);

let mahasiswaipk = mahasiswa.find(mhs => mhs.ipk < 3.0 || mhs.semester < 5);
console.log(mahasiswaipk);


const totalIpk = mahasiswa.reduce((total, mhs) => {
    if (mhs.aktif) {
        return total + mhs.ipk;
    }
    return total;
}, 0);
console.log(`Total IPK: ${totalIpk}`);

function keteranganipk(ipk) {
    if (ipk >= 3.5) {
        return "Cumlaude";
    } else if (ipk >= 3.0) {
        return "Baik";
    } else {
        return "Perlu Perbaikan";
    }
}

const mahasiswaKeterangan = mahasiswa.map(mhs => {
    return {
        nama: mhs.nama,
        ipk: mhs.ipk,
        keterangan: keteranganipk(mhs.ipk)
    };
});
console.log(mahasiswaKeterangan);