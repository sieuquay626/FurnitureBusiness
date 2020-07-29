const similarity = require('compute-cosine-similarity');

export function sortByScore(recommendation) {
  return recommendation.sort((a, b) => b.score - a.score);
}

export function getCosineSimilarityRowVector(matrix, index) {
  return matrix.map((rowRelative, i) => {
    return similarity(matrix[index], matrix[i]);
  });
}

export function getProductIndexByTitle(PRODUCTS_IN_LIST, query) {
  const index = PRODUCTS_IN_LIST.map(product =>product.title).indexOf(query);

  if (!index) {
    throw new Error('Movie not found');
  }

  const { title, id } = PRODUCTS_IN_LIST[index];
  return { index, title, id };
}
