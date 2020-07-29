const fs = require('fs');
const csv = require('csv-parser');

let PRODUCTS_META_DATA = [];
let PRODUCTS_KEYWORDS = [];
let RATINGS = [];

let ME_USER_ID = 0;

function readFileStreamPromise(path, MetaDataFile, x) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path, { encoding: 'utf8' })
      .pipe(csv({ header: true }))
      .on('data', (data) => MetaDataFile(data))
      .on('end', () => resolve(x));
  });
}

async function run() {
  let moviesMetaData = await readFileStreamPromise(
    './services/data/movies_metadata.csv',
    fromMetaDataFile,
    PRODUCTS_META_DATA
  );

  let moviesKeywords = await readFileStreamPromise(
    './services/data/keywords.csv',
    fromKeywordsFile,
    PRODUCTS_KEYWORDS
  );

  let ratings = await readFileStreamPromise(
    './services/data/ratings_small.csv',
    fromRatingsFile,
    RATINGS
  );

  return [moviesMetaData, moviesKeywords, ratings];
}

run().then((values) => {
  let [moviesMetaData, moviesKeywords, ratings] = [...values];
  console.log(ratings);
});
function fromMetaDataFile(row) {
  PRODUCTS_META_DATA.push({
    id: row.id,
    brand: row.brand,
    category: softEval(row.category, []),
    title: row.title,
    material:row.material,
    voteAverage: row.vote_average,
    voteCount: row.vote_count,
  });
}

function fromKeywordsFile(row) {
  PRODUCTS_KEYWORDS.push({
    keywords: softEval(row.keywords, []),
  });
}

function fromRatingsFile(row) {
  RATINGS.push(row);
}

function softEval(string, escape) {
  if (!string) {
    return escape;
  }

  try {
    return eval(string);
  } catch (e) {
    return escape;
  }
}
