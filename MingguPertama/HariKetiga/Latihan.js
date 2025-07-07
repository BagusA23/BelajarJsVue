let mahasiswa = [
    {nama : "bagus", ipk: 3.5, jurusan: "Teknik Informatika"},
    {nama : "siti", ipk: 3.8, jurusan: "Sistem Informasi"},
    {nama : "budi", ipk: 2.9, jurusan: "Teknik Komputer"}
];


mahasiswa.forEach((mhs) => {
    console.log(`Nama: ${mhs.nama}, IPK: ${mhs.ipk}, Jurusan: ${mhs.jurusan}`);
});

let hasil = mahasiswa.map(mhs => mhs.nama);
console.log(hasil);

let lulus = mahasiswa.filter(mhs => mhs.ipk >= 3.0);
console.log(lulus);

let yangdicari = mahasiswa.find(mhs => mhs.jurusan === "Teknik Informatika");
console.log(yangdicari ? yangdicari.nama : "Tidak ada mahasiswa dengan jurusan Teknik Informatika");

let totalipk = mahasiswa.reduce((total,mhs) => total + mhs.ipk, 0);
console.log(`Total IPK: ${totalipk}`);

let rataipk = totalipk / mahasiswa.length;
console.log(`Rata-rata IPK: ${rataipk.toFixed(2)}`);
