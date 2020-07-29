const puppeteer = require('puppeteer');
let url = `https://hauslondon.com/collections/sofas`;

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);

  let urlData = await page.evaluate(() => {
    let products = [];
    let product_wrapper = document.querySelectorAll('.product-li');
    let count = 0;
    product_wrapper.forEach((product) => {
      let dataJson = {};
      try {
        dataJson.img = product.querySelector('.r__ > img').srcset;
        dataJson.title = product.querySelector('.h4').innerText;
        dataJson.price = product.querySelector('.c__sale').innerText;
        let html = product.getElementsByClassNamer('price')[count].innerText;
        dataJson.brand = html.slice(0, html.indexOf('from') - 1);
        count++;
      } catch (err) {
        console.log(err);
      }
      products.push(dataJson);
    });
    return products;
  });

  console.log(urlData);
  await browser.close();
})();

let products = []; // tạo một array để có thể push dữ liệu của từng sản phẩm vào
let product_wrapper = document.querySelectorAll('.product-li');

let count = 0;
product_wrapper.forEach((product) => {
  let dataJson = {};
  try {
    dataJson.img = product.querySelector('.r__ > img').srcset;
    dataJson.title = product.querySelector('.h4').innerText;
    dataJson.price = product.querySelector('.c__sale').innerText;
    let html = product.getElementsByClassName('price')[count++].innerText;
    console.log(html);
    dataJson.brand = html.slice(0, html.indexOf('from') - 1);
  } catch (err) {
    console.log(err);
  }
  products.push(dataJson); // Push dữ liệu object vào trong array
});
console.log(products);
