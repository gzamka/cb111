Number;
String;
NaN;
null;
Boolean;
undefined;
Array;

// array.length - element ийн тоо
// array index - элементийн байрлал, 0 -ээс эхэлнэ
// array[index] - array - д хандах

let a = [7, 3, -2, 8, -9];
// 1. array ийн бүх элементүүдийг тус тусад нь хэвлэ
// 2. array ийн бүх элементүүдийн нийлбэрийг олоод хэвлэ
// 3. array ийн элементүүдээс хамгийн их болон хамгийн бага элементийг олоод хэвлэ.

if (a[0] > a[1] && a[0] > a[2] && a[0] > a[3] && a[0] > a[4]) {
  console.log("hamgiin ih ni a[0]" + a[0]);
} else if (a[1] > a[0] && a[1] > a[2] && a[1] > a[3] && a[1] > a[4]) {
  console.log("hamgiin ih ni a[1]" + a[1]);
} else if (a[2] > a[0] && a[2] > a[3] && a[2] > a[4] && a[2] > a[1]) {
  console.log("hamgiin ih ni a[2]" + a[2]);
} else if (a[3] > a[0] && a[3] > a[2] && a[3] > a[4] && a[3] > a[1]) {
  console.log("hamgiin ih ni a[3]" + a[3]);
} else if (a[4] > a[0] && a[4] > a[2] && a[4] > a[3] && a[4] > a[1]) {
  console.log("hamgiin ih ni a[4]" + a[4]);
}
// 4. array доторх тэгш тоонуудыг хэвлэ.

if (a[0] % 2 == 0) {
  console.log(a[0]);
}

if (a[1] % 2 == 0) {
  console.log(a[1]);
}

if (a[2] % 2 == 0) {
  console.log(a[2]);
}

if (a[3] % 2 == 0) {
  console.log(a[3]);
}
if (a[4] % 2 == 0) {
  console.log(a[4]);
}
// 5. array доторх сөрөг тоонуудыг хэвлэ.

if (a[0] < 0) {
  console.log(a[0]);
}

if (a[1] < 0) {
  console.log(a[1]);
}

if (a[2] < 0) {
  console.log(a[2]);
}

if (a[3] < 0) {
  console.log(a[3]);
}

if (a[4] < 0) {
  console.log(a[4]);
}

++++++

// let a, b, c, d, e, sum;

// a = ner[0];
// b = ner[1];
// c = ner[2];
// d = ner[3];
// e = ner[4];
// sum = a + b + c + d + e;

// console.log(sum);


for loop
while loop
do while loop
