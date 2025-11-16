let arrayKosong = []; // buat array
let nama = ["Zaki", "Albert", "Emil"];
let angka = [6, 9, 0];
let campur = ["Zaki", "Azak", 6, 9];

console.table(nama);
console.table(angka);
console.table(campur);

nama.push("Azak"); // tambah data ke ujung array
angka.push(1, 2, 3);

console.table(nama);

let len = nama.length; // panjang array

console.log(len);

console.info(nama[0]); // mengakses data dalam array dengan index
console.info(nama[1]);

nama[1] = "Kafka"; // mengubah data dalam array dengan index

console.table(nama);

delete nama[2]; // menghapus data dalam array dengan index

console.table(nama);

nama.push(["Socrates", "Plato", "Aristoteles"]); // array di dalam array

console.table(nama);

// Program ini menampilkan penggunaan array yaitu membuat variabel berisi banyak nilai