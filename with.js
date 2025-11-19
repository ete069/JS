const manusia = {
    namaDepan: "Jean",
    namaTengah: "Paul",
    namaBelakang: "Sartre"
};

console.info(manusia.namaDepan);
console.info(manusia.namaTengah);
console.info(manusia.namaBelakang);
console.info("=====");

with (manusia){
    console.info(namaDepan);
    console.info(namaTengah);
    console.info(namaBelakang);
}; // mengakses properti/attribute tanpa menyebut nama object nya

// Program ini mendemonstrasikan penggunaan with statement untuk membuat scope dari object
