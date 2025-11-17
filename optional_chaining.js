const orang = {};

let kota;
// kota = orang.alamat.kota; 
// ini akan error karena memaksa mengakses attribute yang sudah undefined

if(orang.alamat !== undefined && orang.alamat !== null){
    kota = orang.alamat.kota;
}; // cek dulu apakah attribute itu undefined

console.info(kota); // tapi kurang efisien

kota = orang?.alamat?.kota; // gunakan optional chaining lebih efisien
console.info(kota);

// Program ini memperlihatkan penggunaan optional chaining untuk mengecek attribute itu apakah nullish