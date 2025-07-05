let mahasiswa = [
    {
        nama : "bagus ardiansyah",
        angkatan : 2021,
        jurusan : "Teknik Informatika",
        ipk : 3.50,
        islulus : true
    },
    {
        nama : "andi",
        angkatan : 2022,
        jurusan : "Sistem Informasi",
        ipk : 3.00,
        islulus : false
    },
    {
        nama : "siti",
        angkatan : 2020,
        jurusan : "Teknik Komputer",
        ipk : 3.80,
        islulus : true
    }
]

if ((mahasiswa[0].ipk > 3.20) || (mahasiswa[1].ipk > 3.20) || (mahasiswa[2].ipk > 3.20)) {
    let islulus = true;
} else {
    let islulus = false;
}


console.log(mahasiswa[1].nama);
console.log(mahasiswa[0].ipk);
console.log(mahasiswa.length);
console.log(mahasiswa[2].islulus);

let universitas = [
    "Universitas Indonesia",
    "Universitas Gadjah Mada",
    "Institut Teknologi Bandung",
]

let tahun = [
    2021,
    2022,
    2020
]

console.log("mahasiswa " + mahasiswa[0].nama + " dari " + universitas[0] + " angkatan " + tahun[0] + " dengan IPK " + mahasiswa[0].ipk);
console.log("mahasiswa " + mahasiswa[1].nama + " dari " + universitas[1] + " angkatan " + tahun[1] + " dengan IPK " + mahasiswa[1].ipk);
console.log("mahasiswa " + mahasiswa[2].nama + " dari " + universitas[2] + " angkatan " + tahun[2] + " dengan IPK " + mahasiswa[2].ipk);