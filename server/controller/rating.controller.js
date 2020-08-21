const Rating = require('../model/Rating');
const Product = require('../model/Product');
const User = require('../model/User');
const similarity = require('compute-cosine-similarity');
const { Promise } = require('mongoose');
function Table() {
  this.rowNames = [];
  this.columnNames = [];
  this.cells = {};
  this.cellCount = 0;
  this.setCell = function (rowName, colName, value) {
    if (!this.rowNames.includes(rowName)) {
      this.rowNames = [...this.rowNames, rowName];
    }

    if (!this.columnNames.includes(colName)) {
      this.columnNames = [...this.columnNames, colName];
    }
    let key = `${rowName}-${colName}`;
    if (!(key in this.cells)) {
      this.cells[key] = value;
      this.cellCount++;
    }
  };
}
var table = new Table();
module.exports = {
  listRating: async (req, res) => {
    await Rating.find()
      .populate('users')
      .populate('products')
      .then((rating) => {
        res.status(200).json(rating);
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },
  inforRating: async (req, res) => {
    await Rating.findById(req.params.id)
      .populate('users')
      .populate('products')
      .then((rating) => {
        res.status(200).json(rating);
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },

  recommentDataRating: async (req, res) => {
    let user = [];
    Rating.find()
      .then(async (rating) => {
        for (let i = 0; i < rating.length; i++) {
          table.setCell(
            JSON.stringify(rating[i].product),
            JSON.stringify(rating[i].user),
            Number(rating[i].value)
          );
        }
      })
      .then(async (val) => {
        let a = [];
        let userRecomment = req.body.user;
        console.log(userRecomment);
        let vtUserRecomment = table.columnNames.indexOf(
          JSON.stringify(userRecomment)
        );
        for (let i = 0; i < table.rowNames.length; i++) {
          let x = [];
          for (let j = 0; j < table.columnNames.length; j++) {
            let key = `${table.rowNames[i]}-${table.columnNames[j]}`;
            if (key in table.cells) {
              x.push(table.cells[key]);
            } else {
              x.push('?');
            }
          }
          a.push(x);
        }
        console.table(a);
        let arrCopy = () => {
          let x = [];
          for (let i = 0; i < a.length; i++) {
            let t = [];
            for (j = 0; j < a[i].length; j++) {
              t.push(a[i][j]);
            }
            x.push(t);
          }
          return x;
        };
        let b = arrCopy(a);
        console.table(b);

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
        for (let i = 0; i < table.columnNames.length; i++) {
          let x = sumByColumn(i);
          tb.push(Number((x.sum / (x.count ? x.count : 1)).toFixed(2)));
        }
        console.log('Đánh giá trung bình', tb);
        let arrPredict = [];
        console.log('Bước 2');
        for (let i = 0; i < a.length; i++) {
          for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] == '?') {
              if (j == vtUserRecomment) {
                arrPredict.push(i);
              }
              a[i][j] = 0;
            } else {
              a[i][j] = Number((a[i][j] - tb[j]).toFixed(2));
            }
          }
        }
        console.table(a);

        console.log('Bước 3');
        function ArrByColumn(arr, col) {
          let x = [];
          for (let i = 0; i < arr.length; i++) {
            x.push(arr[i][col]);
          }
          return x;
        }
        let t = [];
        for (let i = 0; i < table.columnNames.length; i++) {
          t.push([]);
          for (let j = 0; j < table.columnNames.length; j++) {
            if (i == j) {
              t[i].push(1);
            } else {
              t[i].push(
                Number(
                  similarity(ArrByColumn(a, i), ArrByColumn(a, j)).toFixed(2)
                )
              );
            }
          }
        }
        console.table(t);

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

        console.log('Bước 5');
        for (let i = 0; i < a.length; i++) {
          for (let j = 0; j < a[i].length; j++) {
            a[i][j] = Number((a[i][j] + tb[j]).toFixed(2));
          }
        }
        console.table(a);

        let arrtempPredict = [];
        let arrtempRated = [];
        for (let i = 0; i < a.length; i++) {
          if (arrPredict.indexOf(i) != -1) {
            arrtempPredict.push({
              x: i,
              value: a[i][Number(vtUserRecomment)],
            });
          } else {
            arrtempRated.push({
              x: i,
              value: a[i][Number(vtUserRecomment)],
            });
          }
        }

        arrtempRated = arrtempRated.sort((a, b) => {
          return b.value - a.value;
        });

        arrtempPredict = arrtempPredict.sort((a, b) => {
          return b.value - a.value;
        });

        arrtempPredict = [...arrtempPredict, ...arrtempRated];

        arrtempPredict = arrtempPredict.slice(0, 10);

        for (let i = 0; i < table.rowNames.length; i++) {
          arrtempPredict.map((c) => {
            if (c.x == i) {
              c.product = table.rowNames[i];
            }
          });
        }

        let jsonProduct = [];
        let prom = new Promise((resolve, reject) => {
          arrtempPredict.map((predict, index) => {
            Product.findById(JSON.parse(predict.product))
              .then((result) => {
                jsonProduct = [...jsonProduct, result];
                return jsonProduct;
              })
              .then((v) => {
                if (index === 9) {
                  resolve(v);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }).then((value) => {
          res.json(value);
        });

        // try {
        //   arrtempPredict.map((predict) => {
        //     Product.findById(JSON.parse(predict.product))
        //       .then((result) => {
        //         jsonProduct = [...jsonProduct, JSON.stringify(result)];
        //       })
        //       .catch((err) => {
        //         console.log(err);
        //       });
        //   });
        // } catch (err) {
        //   console.log(err);
        // } finally {
        //   console.log(jsonProduct);
        // }

        // let testPromise = new Promise((resolve) => {
        //   console.log(jsonProduct);
        //   resolve(jsonProduct);
        // }).then((value) => {
        //   console.log(value);
        //   res.status(200).json(value);
        // });
      });

    // await Product.find()
    //   .then(async (product) => {
    //     console.log(product.length);
    //     console.log(req.body.user);
    //     let count = 0;
    //     product.map((item) => {
    //       let value = Number(Math.round(Math.random() * 5));
    //       if (value > 1) {
    //         const newRating = new Rating({
    //           value: value,
    //           user: req.body.user,
    //           product: item._id,
    //         });
    //         count++;
    //         item.ratings.push(newRating._id);
    //         item.save();
    //         newRating.save();
    //       }
    //     });
    //     console.log(count);
    //   })
    //   .catch((err) => {
    //     res.json('B1');
    //   });

    // let product = await Product.find();
    // for (let j = 0; j < product.length; j++) {
    //   await Product.findById(product[j]._id).then((product) => {
    //     product.ratings = [];
    //     // ...product.ratings, newRating._id
    //     product.save();
    //   });
    // }
  },
  adddRating: async (req, res) => {
    const newRating = new Rating({
      value: Number(req.body.value),
      user: req.body.user,
      product: req.body.product,
    });

    await Rating.findOne({ user: req.body.user }, { product: req.body.product })
      .then(async (rating) => {
        if (!rating) {
          await Product.findById(req.body.product).then((product) => {
            product.ratings.push(newRating._id);
            product.save();
          });
          await newRating
            .save()
            .then((rate) => {
              res.status(200).json(rate);
            })
            .catch((err) => {
              res.status(400).json({ msg: err });
            });
        } else {
          rating.value = Number(req.body.value);
          rating
            .save()
            .then((rate) => {
              res.status(200).json(rate);
            })
            .catch((err) => {
              res.status(400).json({ msg: err });
            });
        }
      })
      .catch((err) => {
        console.log(3);
      });
  },

  editRating: async (req, res) => {
    await Rating.findById(req.params.id)
      .then(async (rating) => {
        rating.value = parseInt(req.body.value);

        rating
          .save()
          .then((rate) => {
            res.status(200).json(rate);
          })
          .catch((err) => {
            res.status(400).json(err);
          });
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },
};
