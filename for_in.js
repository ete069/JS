const orang = {
    namaDepan: "Abdurahman",
    namaTengah: "Zaki",
    namaAkhir: "D"
};

for (const nama in orang){
    console.log(`${nama} : ${orang[nama]}`);
}; // mengakses semua attribute/properti(bukan nilai) dalam object dengan perulangan

const names = ["Abdurahman", "Zaki", "D"];
for (const indeks in names){
    console.info(`${indeks} : ${names[indeks]}`)
}; // bisa digunakan untuk array

// Program ini mendemonstrasikan penggunaan perulangan for in untuk mengakses properti dan indeks