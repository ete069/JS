function faktorial(n){
    let hasil = 1;
    for (let i = 1; i <= n; i++){
        hasil *= i;
    }
    return hasil;
};
// menghitung faktorial tanpa rekursive, tapi perulanagn
console.info(faktorial(5));

function faktorialRekursif(n){
    if (n === 1){
        return 1;
    } else {
        return n * faktorialRekursif(n - 1);
    }
};
// menggunakan rekursive (function memanggil dirinya sendiri di dalamnya) lebih efisien
console.info(faktorialRekursif(5));

// Program ini mendemonstrasikan penggunaan rekursive dalam function, yaitu function memanggil dirinya sendiri