/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/*Ada tiga yaitu block scope, function scope dan global scope*/
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/*
1. block scope variabel tersebut dapat dicakupkan ke pasangan kurung kurawal terdekat. Artinya, mereka tidak dapat diakses dari luar pasangan kurung kurawal tersebut. 
2.function scope Variabel yang dideklarasikan di dalam suatu fungsi berada di dalam lingkup lokal. Mereka hanya dapat diakses dari dalam fungsi itu, itu berarti mereka tidak dapat diakses dari kode luar.
3.Global scope berarti variabel yang kita buat dapat diakses dimanapun dalam suatu file.
Agar menjadi Global Scope, suatu variabel harus dideklarasikan diluar Blocks
*/

/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
///Local Scope
function greeting(){
  let myName :'Nita';
  return myName;
}

console.log(greeting())
console.log(myName);


///Global Scope
let myName: 'Nita';
function greeting(){
  return myName;
}

console.log(myName);

/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ? 
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?


/// WRITE YOUR ANALYSIS HERE
///
/* Mariah akan tampil dalam console log. Alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name 
*/

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
