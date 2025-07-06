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

const cekLulus = (ipk) => {
    if(ipk >= 3.20){
        console.log("Selamat, Anda Lulus!");
    } else {
        console.log("Maaf, Anda Tidak Lulus.");
    }
}

function tampilkanlulus(islulus){
    if(islulus){
        console.log("Mahasiswa ini lulus.");
    } else {
        console.log("Mahasiswa ini tidak lulus.");
    }
}

function ratarataipk(mahasiswa){
    let total = 0;
    mahasiswa.forEach(mhs =>{
        total += mhs.ipk;
    })
    let rataRata = total / mahasiswa.length;
    console.log("Rata-rata IPK: " + rataRata);
}

mahasiswa.forEach(mhs => {
    console.log("Nama: " + mhs.nama);
    console.log("IPK: " + mhs.ipk);
    cekLulus(mhs.ipk);
    tampilkanlulus(mhs.islulus);
});

ratarataipk(mahasiswa);