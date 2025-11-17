const orang = {
    namaDepan: "Abdurahman",
    namaTengah: "Zaki",
    namaBelakang: undefined
}; // dalam object

if ("namaDepan" in orang) {
    console.info(`Halo ${orang.namaDepan}!`);
} else {
    console.info("Halo!");
}

if ("namaBelakang" in orang) {
    console.info(`Halo ${orang.namaBelakang}!`);
} else {
    console.info("Halo!");
} // undefined tetap terbaca ada

const nama = [null, "Abdurahman", "Zaki"]; // dalam array
const hasil = 0 in nama;
console.info(hasil);

if (0 in nama){
    console.info("Ada!")
} else {
    console.info("Tidak ada!")
} // null tetap terbaca ada

// Program ini mendemonstrasikan penggunaan in operator untuk mencari adanya sebuah data dalam array maupun object