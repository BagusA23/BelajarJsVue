let angka = [1,2,3,4,5];
angka.forEach((item)=> {
    console.log(item*2);
})


let angka2 = [1,2,3,4,5];
let hasil = angka2.map(item => item * 2);
console.log(hasil);


let angka3 = [90, 88, 75, 60, 45];
let lulus = angka3.filter(item => item >= 60);
console.log(lulus);

let mahasiswa = [
    {nama : 'Budi', nilai: 80},
    {nama : 'Siti', nilai: 90},
];

let yangdicari = mahasiswa.find(mhs => mhs.nilai < 90);
console.log(yangdicari ? yangdicari.nama : "Tidak ada mahasiswa dengan nilai di bawah 90");

let nilai = [80, 90, 75, 60, 45];
let total = nilai.reduce((a,b) => a + b,0);
console.log(total);

