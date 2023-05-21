// fizzbuzz
// Өгөгдсөн тоо 3-т хуваагддаг бол fizz, 5-т хуваагддаг бол buzz, 2-ланд нь хуваагддаг бол fizzbuzz гэж хэвлэ.Бусад үед error гэж хэвлэ.

// 6. 5 төрлийн нас өгөгдөнө. хамгийн их болон хамгийн бага насыг ол.  A, B, C, D, E
// let a = 15,
//   b = 30,
//   c = 40,
//   d = 60,
//   e = 60;

// if (a > b && a > c && a > d && a > e) {
//   console.log("hamgiin ih nas bol " + a);
// } else if (b > a && b > c && b > d && b > e) {
//   console.log("hamgiin ih nas bol " + b);
// } else if (c > a && c > b && c > d && c > e) {
//   console.log("hamgiin ih nas bol " + c);
// } else if (d > a && d > b && d > c && d > e) {
//   console.log("hamgiin ih nas bol " + d);
// } else if (e > a && e > b && e > c && e > d) {
//   console.log("hamgiin ih nas bol " + e);
// } else {
//   console.log("ih too 1 ees olon bn");
// }

// 7. Өгөгдсөн цагийг хоног цагт шилжүүл
// let tsag = 49;
// let honog, htsag;

// honog = Math.floor(tsag / 24);
// htsag = tsag % 24;

// console.log(honog, htsag);

// 8. Өгөгдсөн сарыг жил сард шилжүүл
// let sar = 20;
// let jil, sarh;

// jil = Math.floor(sar / 12);
// sarh = sar % 12;
// console.log(jil, sarh);

// 9. Өгөгдсөн сарыг жил хоногт шилжүүл
// let sar = 25;
// let jil, honog;

// jil = sar / 12;
// jil = Math.floor(jil);
// honog = (sar % 12) * 30;

// console.log("jil = " + jil, "honog = " + honog);
// let a = 25;
// if (a % 3 == 0 && a % 5 == 0) {
//   console.log("fizzbuzz");
// } else if (a % 5 == 0) {
//   console.log("buzz");
// } else if (a % 3 == 0) {
//   console.log("fizz");
// }

// 2. Гараас тоон утга өгөгдөнө тохирох сарын улиралыг alert ашиглан хэвлэ(prompt,  alert) 6 7 8 - Зун, 9 10 11 - Намар, 12 1 2 - Өвөл, 3 4 5 - Хавар, бусад тохиолдолд утга буруу байна гэж хэвлэ.
let b = 1;
// if (b == 1 || b == 2 || b == 12) {
//   console.log("ovol");
// } else if (b == 3 || b == 4 || b == 5) {
//   console.log("havar");
// } else if (b == 6 || b == 7 || b == 8) {
//   console.log("zun");
// } else if (b == 9 || b == 10 || b == 11) {
//   console.log("namar");
// } else {
//   console.log("error");
// }
switch (key) {
  case value:
    break;

  default:
    break;
}

switch (b) {
  case 1:
  case 2:
  case 12:
    console.log("ovol");
    break;

  case 3:
  case 4:
  case 5:
    console.log("havar");
    break;

  case 6:
  case 7:
  case 8:
    console.log("zun");
    break;

  case 9:
  case 10:
  case 11:
    console.log("namar");
    break;

  default:
    console.log("buruu");
    break;
}
