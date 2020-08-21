const similarity = require('compute-cosine-similarity');

//DS
let a = [
  [5, 5, 2, 0, 1, '?', '?'],
  [4, '?', '?', 0, '?', 2, '?'],
  ['?', 4, 1, '?', '?', 1, 1],
  [2, 2, 3, 4, 4, '?', 4],
  [2, 0, 4, '?', '?', '?', 5],
];

let length = a[0].length;
console.table(a);

//B1
console.log('Bước 1');
function sumByColumn(vt) {
  let t = { sum: 0, count: 0 };
  for (let j = 0; j < a.length; j++) {
    if (a[j][vt] != '?') {
      t.sum += a[j][vt];
      t.count++;
    }
  }
  return t;
}
let tb = [];
for (let i = 0; i < length; i++) {
  let x = sumByColumn(i);
  tb.push(Number((x.sum / (x.count ? x.count : 1)).toFixed(2)));
}
console.log('Đánh giá trung bình', tb);

//B2
console.log('Bước 2');
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a[i].length; j++) {
    if (a[i][j] == '?') {
      // console.log(`(${i},${j})`);
      a[i][j] = 0;
    } else {
      a[i][j] = Number((a[i][j] - tb[j]).toFixed(2));
    }
  }
}
console.table(a);

//B3
console.log('Bước 3');
function ArrByColumn(arr, col) {
  let x = [];
  for (let i = 0; i < arr.length; i++) {
    x.push(arr[i][col]);
  }
  return x;
}
let t = [];
for (let i = 0; i < length; i++) {
  t.push([]);
  for (let j = 0; j < length; j++) {
    if (i == j) {
      t[i].push(1);
    } else {
      t[i].push(
        Number(similarity(ArrByColumn(a, i), ArrByColumn(a, j)).toFixed(2))
      );
    }
  }
}
console.table(t);

//B4
console.log('Bước 4 ');
let k = 2;

function userRatedWithProduct(arr, indexProduct) {
  let temp = [];
  for (let j = 0; j < arr[indexProduct].length; j++) {
    if (arr[indexProduct][j] != 0) {
      temp.push(j);
    }
  }
  return temp;
}

function compute(mappingvt, mappingvalue, k) {
  let index = [];

  mappingvalue.map((item) => {
    for (let z = 0; z < mappingvt.length; z++) {
      if (mappingvt[z].value == item) {
        index.push(mappingvt[z].vt);
      }
    }
  });
  return index;
}

for (let i = 0; i < a.length; i++) {
  let temp = userRatedWithProduct(a, i);
  let vt;

  for (let j = 0; j < a[i].length; j++) {
    let mappingvt = [];
    let mappingvalue = [];
    if (a[i][j] == 0) {
      temp.map((item) => {
        mappingvt.push({ value: t[item][j], vt: item });
        mappingvalue.push(t[item][j]);
      });
      mappingvalue.sort((a, b) => {
        return b - a;
      });
      mappingvalue = mappingvalue.slice(0, k);
      vt = compute(mappingvt, mappingvalue, k);
      // console.log(`(${i},${j})`);
      a[i][j] = Number(
        (
          (t[vt[0]][j] * a[i][vt[0]] + t[vt[1]][j] * a[i][vt[1]]) /
          (Math.abs(t[vt[0]][j]) + Math.abs(t[vt[1]][j]))
        ).toFixed(2)
      );
    }
  }
}
console.table(a);

//B5
console.log('Bước 5');
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a[i].length; j++) {
    // console.log(`(${a[i][j]}+${tb[i]})`);
    // a[i][j] = Math.round(a[i][j] + tb[i], -2);
    a[i][j] = Number((a[i][j] + tb[j]).toFixed(2));
  }
}
console.table(a);

//
console.log('Bước 6');
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a[i].length; j++) {
    a[i][j] = a[i][j] > 0 ? Math.round(a[i][j]) : 0;
  }
}
console.table(a);
