const URL = 'https://jsonplaceholder.typicode.com/users';


async function ambilData() {
  try{
    const respone = await fetch(URL);
    const data = await respone.json();

    console.log("data berhasil diambil");
    console.log(data)

    console.log("semua nama user");
    data.forEach(user => {
      console.log(`-${user.name}`)
    });

    const kotatarget = ["South Christy","Gwenborough"];
    const userFiltered = data.filter(user =>
      kotatarget.includes(user.address.city)
    );
    console.log("semua dari kota tertentu");
    console.log(userFiltered);

    // 4. Hitung total panjang nama user (nama.length)
    const totalPanjangNama = data.reduce((total, user) => total + user.name.length, 0);
    console.log(`\n📏 Total panjang nama semua user: ${totalPanjangNama}`);

    // 5. Cari user dengan suite tertentu (find)
    const userSuite847 = data.find(user => user.address.suite === "Suite 847");
    console.log("\n🔍 User dengan Suite 847:");
    console.log(userSuite847);


  }catch(error){
    console.error("gagal mengambil data", error.massage); 
  }
}

ambilData();