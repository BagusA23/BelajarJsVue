fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => response.json)
 .then(data => console.log(data))
 .catch(error => console.error('terjadi error',error));


async function ambildata(params) {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log('error saat ambil data',error)
    }
 };

ambildata();