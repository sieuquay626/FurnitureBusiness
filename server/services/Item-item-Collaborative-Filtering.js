const similarity = require('compute-cosine-similarity');
const { isBuffer } = require('lodash');

// //DS
// let a = [
//   [5, 5, 2, 0, 1, '?', '?'],
//   [4, '?', '?', 0, '?', 2, '?'],
//   ['?', 4, 1, '?', '?', 1, 1],
//   [2, 2, 3, 4, 4, '?', 4],
//   [2, 0, 4, '?', '?', '?', 5],
// ];

// let length = 6;
// console.table(a);

// //B1
// console.log('Bước 1');
// function sumByRow(vt) {
//   let t = { sum: 0, count: 0 };
//   for (let j = 0; j < a[vt].length; j++) {
//     if (a[vt][j] != '?') {
//       t.sum += a[vt][j];
//       t.count++;
//     }
//   }
//   return t;
// }
// let tb = [];
// for (let i = 0; i < a.length; i++) {
//   let x = sumByRow(i);
//   tb.push(Number((x.sum / (x.count ? x.count : 1)).toFixed(2)));
// }
// console.log('Đánh giá trung bình', tb);

// //B2
// console.log('Bước 2');
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a[i].length; j++) {
//     if (a[i][j] == '?') {
//       a[i][j] = 0;
//     } else {
//       a[i][j] = Number((a[i][j] - tb[i]).toFixed(2));
//     }
//   }
// }
// console.table(a);

// //B3
// console.log('Bước 3');
// function ArrByRow(arr, row) {
//   let x = [];
//   for (let j = 0; j <= length; j++) {
//     x.push(arr[row][j]);
//   }
//   return x;
// }
// let t = [];
// for (let i = 0; i < a.length; i++) {
//   t.push([]);
//   for (let j = 0; j < a.length; j++) {
//     if (i == j) {
//       t[i].push(1);
//     } else {
//       t[i].push(Number(similarity(ArrByRow(a, i), ArrByRow(a, j)).toFixed(2)));
//     }
//   }
// }
// console.table(t);

// //B4
// console.log('Bước 4 ');
// let k = 2;

// function productRatedByUser(arr, indexUser) {
//   let temp = [];
//   for (let j = 0; j < arr.length; j++) {
//     if (a[j][indexUser] != 0) {
//       temp.push(j);
//     }
//   }
//   return temp;
// }

// function compute(mappingvt, mappingvalue, k) {
//   let index = [];
//   console.log(mappingvt);
//   mappingvalue.map((item) => {
//     for (let z = 0; z < mappingvt.length; z++) {
//       if (mappingvt[z].value == item) {
//         index.push(mappingvt[z].vt);
//       }
//     }
//   });
//   return index;
// }

// for (let j = 0; j < a[0].length; j++) {
//   let temp = productRatedByUser(a, j);
//   console.log('temp', temp);
//   // let vt;
//   // let VT = 0;
//   // let VD = 0;
//   let mappingvalue = [];
//   let mappingvt = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i][j] == 0) {
//       console.log(`(${i},${j})`);
//       temp.map((item) => {
//         mappingvalue.push(t[i][item]);
//         mappingvt.push({ value: t[i][item], vt: item });
//       });
//       // mappingvalue.sort((a, b) => {
//       //   return b - a;
//       // });
//       console.log(mappingvalue);
//       // mappingvalue = mappingvalue.slice(0, k);
//       // vt = compute(mappingvt, mappingvalue, k);
//       // console.log(vt);
//       // for (let n = 0; n < k; n++) {
//       //   VT += a[vt[n]][j] * t[i][vt[n]];
//       //   VD += Math.abs(t[i][vt[n]]);
//       // }
//       // a[i][j] = Number((VT / (VD == 0 ? 1 : VD)).toFixed(2));
//     }
//   }
// }
// console.table(a);
var jsrecommender = require('js-recommender');
// var recommender = new jsrecommender.Recommender({
//   alpha: 0.01, // learning rate
//   lambda: 0.0, // regularization parameter
//   iterations: 500, // maximum number of iterations in the gradient descent algorithm
//   kDim: 2 // number of hidden features for each movie
// });

var jsrecommender = require('js-recommender');

var recommender = new jsrecommender.Recommender();

var table = new jsrecommender.Table();

table.setCell('Love at last', 'Alice', 5);
table.setCell('Remance forever', 'Alice', 5);
table.setCell('Nonstop car chases', 'Alice', 0);
table.setCell('Sword vs. karate', 'Alice', 0);
table.setCell('Love at last', 'Bob', 5);
table.setCell('Cute puppies of love', 'Bob', 4);
table.setCell('Nonstop car chases', 'Bob', 0);
table.setCell('Sword vs. karate', 'Bob', 0);
table.setCell('Love at last', 'Carol', 0);
table.setCell('Cute puppies of love', 'Carol', 0);
table.setCell('Nonstop car chases', 'Carol', 5);
table.setCell('Sword vs. karate', 'Carol', 5);
table.setCell('Love at last', 'Dave', 0);
table.setCell('Remance forever', 'Dave', 0);
table.setCell('Nonstop car chases', 'Dave', 4);
console.log(table);

// var model = recommender.fit(table);
// console.log(model);
// predicted_table = recommender.transform(table);

// console.log(predicted_table);

// for (var i = 0; i < predicted_table.columnNames.length; ++i) {
//   var user = predicted_table.columnNames[i];
//   console.log('For user: ' + user);
//   for (var j = 0; j < predicted_table.rowNames.length; ++j) {
//     var movie = predicted_table.rowNames[j];
//     console.log(
//       'Movie [' +
//         movie +
//         '] has actual rating of ' +
//         Math.round(table.getCell(movie, user))
//     );
//     console.log(
//       'Movie [' +
//         movie +
//         '] is predicted to have rating ' +
//         Math.round(predicted_table.getCell(movie, user))
//     );
//   }
// }
