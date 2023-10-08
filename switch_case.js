let hariKe = 6;
let namaHari;

switch (hariKe) {
  case 1:
    namaHari = "Awal pekan";
    break;
  case 2:
    namaHari = "Hari kedua";
    break;
  case 3:
    namaHari = "Hari pertengahan";
    break;
  case 4:
    namaHari = "Hari senin";
    break;
  case 5:
    namaHari = "Hari kamis";
    break;
  case 6:
    namaHari = "Akhir pekan";
    break;
  case 7:
    namaHari = "Hari Minggu";
    break;
  default:
    namaHari = "Hari tidak valid";
}

console.log("Hari ke-" + hariKe + " disebut sebagai " + namaHari);
