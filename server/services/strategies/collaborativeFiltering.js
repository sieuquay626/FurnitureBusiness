import math from 'mathjs';
import { getCosineSimilarityRowVector, sortByScore } from './common';

export function predictWithCfUserBased(
  ratingsGroupedByUser,
  ratingsGroupedByProduct,
  userId
) {
  const { userItem } = getMatrices(
    ratingsGroupedByUser,
    ratingsGroupedByProduct,
    userId
  );
  const { matrix, productIds, userIndex } = userItem;

  const matrixNormalized = meanNormalizeByRowVector(matrix);
  const userRatingsRowVector = matrixNormalized[userIndex];

  const cosineSimilarityRowVector = getCosineSimilarityRowVector(
    matrixNormalized,
    userIndex
  );

  const predictedRatings = userRatingsRowVector.map((rating, productIndex) => {
    const productId = productIds[productIndex];

    const productRatingsRowVector = getProductRatingsRowVector(
      matrixNormalized,
      productIndex
    );

    let score;
    if (rating === 0) {
      score = getPredictedRating(
        productRatingsRowVector,
        cosineSimilarityRowVector
      );
    } else {
      score = rating;
    }

    return { score, productId };
  });

  return sortByScore(predictedRatings);
}


export function getMatrices(ratingsGroupedByUser, ratingsGroupedByProduct, uId) {
  const itemUser = Object.keys(ratingsGroupedByMovie).reduce((result, movieId) => {
    const rowVector = Object.keys(ratingsGroupedByUser).map((userId, userIndex) => {

      if (userId == uId) {
        result.userIndex = userIndex;
      }

      return getConditionalRating(ratingsGroupedByMovie, productId, userId);
    });

    result.matrix.push(rowVector);
    result.movieIds.push(movieId);

    return result;
  }, { matrix: [], movieIds: [], userIndex: null });

  const userItem = Object.keys(ratingsGroupedByUser).reduce((result, userId, userIndex) => {
    const rowVector = Object.keys(ratingsGroupedByMovie).map(movieId => {
      return getConditionalRating(ratingsGroupedByUser, userId, movieId);
    });

    result.matrix.push(rowVector);

    if (userId == uId) {
      result.userIndex = userIndex;
    }

    return result;
  }, { matrix: [], movieIds: Object.keys(ratingsGroupedByMovie), userIndex: null });

  return { itemUser, userItem };
}


function getConditionalRating(value, primaryKey, secondaryKey) {
  if (!value[primaryKey]) {
    return 0;
  }

  if (!value[primaryKey][secondaryKey]) {
    return 0;
  }

  return value[primaryKey][secondaryKey].rating;
}