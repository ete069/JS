function sapa(namaDepan, namaBelakang){
    const s = `Halo ${namaDepan} ${namaBelakang}`
    return s;
}; // mengembalikan value/nilai ke pemanggil(function)

console.info(sapa("Emil", "Cioran"));

function tambah(a, b){
    return a + b;
};

function kali(c, d){
    return c * d;
};

// nilai yang dihasilkan dalam function bisa digunakan lagi
console.info(kali(10,10) - tambah(25, 25));

function nilaiAkhir(nilai){
    if (nilai > 90){
        return 'A';
    } else if (nilai > 80){
        return 'B';
    } else if (nilai > 70){
        return 'C';
    } else if (niali > 60){
        return 'D';
    } else {
        return 'E'
    }
}; // bisa lebih dari satu return di dalam function

console.info(nilaiAkhir(75));

function cari(susunan, benar){
    for (const unsur of susunan){
        console.info(unsur);
        if (unsur === benar){
            return true;
        }
    }
    return false;
}; // return menghentikan kode program yang berjalan, termasuk dalam perulangan

console.info(cari([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// Program ini mendemonstrasikan penggunaan return dalam function untuk menghasilkan nilai/value