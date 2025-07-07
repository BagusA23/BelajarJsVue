// Data awal
const mahasiswa = {
  nama: "Bagus",
  umur: 21,
  ipk: 3.6,
  jurusan: "Teknik Informatika",
  nilai: [90, 88, 92]
};

const tambahan = {
  semester: 6,
  aktif: true
};

// 1. Destructuring object
const { nama, ipk, nilai } = mahasiswa;
console.log(`Nama: ${nama}`);
console.log(`IPK: ${ipk}`);
console.log(`Nilai lengkap: ${nilai}`);

// 2. Destructuring array dari 'nilai'
const [nilai1, nilai2] = nilai;
console.log(`Nilai Pertama: ${nilai1}`);
console.log(`Nilai Kedua: ${nilai2}`);

// 3. Spread operator: gabungkan object
const mahasiswaLengkap = { ...mahasiswa, ...tambahan };
console.log("Mahasiswa Lengkap:", mahasiswaLengkap);

// 4. Rest parameter: tampilkan semua argumen
function tampilkanInfo(...args) {
  console.log("=== TAMPILKAN INFO (dari rest param) ===");
  args.forEach((arg, index) => {
    console.log(`Argumen ${index + 1}: ${arg}`);
  });
}

// Contoh pemanggilan
tampilkanInfo(nama, ipk, nilai1, nilai2, mahasiswa.jurusan, mahasiswaLengkap.semester);
