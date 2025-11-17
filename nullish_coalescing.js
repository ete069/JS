let parameter; // misal kita terima data

let data = parameter;
if (data === undefined || data === null){
    data = "Bernilai";
} // biasanya kita harus cek apakah data itu bernilai atau tidak
// jika tidak ada nilai, kita bisa langsung memberi nilai

console.info(data); // tapi kurang efisien

let ada = parameter ?? "Bernilai";
// gunakan nullish coalescing agar lebih efisien
console.info(ada);

// Program ini menampilkan penggunaan nullish coalescing untuk mengecek apakah data itu nullish(undefined, null)