const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, c, d, e, f, g, h, i, j] = angka;
console.log(a); // 1
console.log(j); // 2

const user  = {nama : "bagus", umur : 20, alamat : "jakarta"};
const {nama, umur, alamat} = user;
console.log(nama); // bagus

const angka1 = [1, 2, 3];
const angka2 = [4, 5, 6];
const gabung = [...angka1, ...angka2];
console.log(gabung); // [1, 2, 3, 4, 5, 6]

const data1 = {nama : "bagus", umur: 20};
const data2 = {alamat: "jakarta", pekerjaan: "programmer"};
const gabungData = {...data1, ...data2};
console.log(gabungData); // {nama: "bagus", umur: 20,


const hitung = (a,b,...lainya)=>{
  console.log(lainya);
}

hitung(1,2,3,4,5); // 1 2 [3, 4, 5]