const objectKosong = {}; // buat object
const profil = {};

profil["nama"] = "Zaki"; // mengisi dan mengubah data dalam object
profil["alamat"] = "Magelang"; // menggunakan attributes
profil["umur"] = 20;

console.table(profil);

delete profil["umur"]; // menghapus data dalam object dengan attributes

console.table(profil);

const orang = {
    nama: "Zaki",
    alamat: "Magelang",
    umur: 20,
    "nama lengkap": "Abdurahman Zaki"
}; // membuat object langsung berisi

console.info(`Nama : ${orang.nama}`); // mengakses data dalam object langsung
console.info(`Alamat : ${orang.alamat}`);
console.info(`Umur : ${orang.umur}`);

// Program ini menampilkan penggunaan object atau variabel berisi banyak data yang memiliki attribute