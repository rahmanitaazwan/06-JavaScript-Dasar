/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error


/// WRITE YOUR ANALYSIS HERE
/* Type Error
  Membuat instance yang mewakili kesalahan yang terjadi saat variabel atau parameter bukan tipe yang valid.
Reference error
  Membuat instance yang mewakili kesalahan yang terjadi saat mereferensikan referensi yang tidak valid.
Range Error
  Membuat instance yang mewakili kesalahan yang terjadi saat variabel numerik atau parameter berada di luar rentang validnya.
Syntax Error
  Membuat instance yang mewakili kesalahan sintaks.
*/


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/*Uncaught ReferenceError: salaryWithConst is not defined
    at <anonymous>:2:13. Hal tersebut terjadi karena variabel yang belum di inisialisasi.
    */
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;