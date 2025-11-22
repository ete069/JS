function* buatNama(){
    yield "Abdurahman";
    yield "Zaki";
    yield "D";
}; // membuat function generator yang memuat banyak data dan bisa diiterasi, mirip-mirip array
// tapi tidak bisa akses dengan index seperti array

const profil = buatNama();
for (const nama of profil){
    console.info(nama);
};

console.info("=====");
console.info(" ");

function* buatGanjil(n){
    for (let i = 1; i <= n; i++){
        if (i % 2 === 1){
            console.info(`Yield ${i}`);
            yield i;
        }
    }
}; // function generator bersifat lazy, artinya sintaks di dalamnya akan dieksekusi hanya ketika dipanggil
// jadi ketika data pertama dipanggil, function baru menjalankan sintaks untuk data pertama
// lalu ketika data kedua dipanggil, baru function menjalankan sintaks untuk data kedua
// jadi sintaks console.info selanjutnya tidak akan dipanggil sebelum yield dieksekusi

const angka = buatGanjil(100);
for (const a of angka){
    console.info(a);
}; // lebih hemat data dan penggunaan

console.info("=====");
console.info(" ");

function buatGanjilArray(n){
    let hasil = [];
    for (let i = 1; i <= n; i++){
        if (i % 2 === 1){
            console.info(`Yield ${i}`);
            hasil.push(i);
        }
    }
    return hasil;
}; // function biasa berbeda, ia bersifat eager, artinya seluruh sintaks di function akan dijalankan untuk semua data begitu dipanggil
// jadi sintaks console.info akan dieksekusi oleh function, walaupun perulangan untuk array hasil tidak kita jalankan

const bilangan = buatGanjilArray(100);
for (const b of bilangan){
    console.info(b);
};

// Program ini mendemonstrasikan penggunaan function generator untuk memuat banyak data dan bisa diiterasi