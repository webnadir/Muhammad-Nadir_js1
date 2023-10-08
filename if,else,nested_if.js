var nilai = 90;

if (nilai >= 80) {
    console.log("Nilai Anda A");
} else if (nilai >= 70) {
    console.log("Nilai Anda B");
} else if (nilai >= 60) {
    console.log("Nilai Anda C");
} else {
    console.log("Nilai Anda D");
    
    if (nilai < 50) {
        console.log("Anda perlu belajar lebih keras.");
    }
}
