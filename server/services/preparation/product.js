const natural = require('natural');
natural.PorterStemmer.attach();


export function zip(movies, keywords) {
  return Object.keys(movies).map(mId => ({
    ...movies[mId],
    ...keywords[mId],
  }));
}


function prepareMovies(moviesMetaData, moviesKeywords) {
  console.log('Preparing Movies ... \n');

  // Pre-processing movies for unified data structure
  // E.g. get overview property into same shape as studio property
  console.log('(1) Zipping Movies');
  let MOVIES_IN_LIST = zip(moviesMetaData, moviesKeywords);
  console.log(MOVIES_IN_LIST);
  // MOVIES_IN_LIST = withTokenizedAndStemmed(MOVIES_IN_LIST, 'overview');
  // MOVIES_IN_LIST = fromArrayToMap(MOVIES_IN_LIST, 'overview');

  // // Keep a map of movies for later reference
  // let MOVIES_BY_ID = MOVIES_IN_LIST.reduce(byId, {});

  // console.log('(2) Creating Dictionaries');
  // // Preparing dictionaries for feature extraction
  // let DICTIONARIES = prepareDictionaries(MOVIES_IN_LIST);

  // // Feature Extraction:
  // // Map different types to numerical values (e.g. adult to 0 or 1)
  // // Map dictionaries to partial feature vectors
  // console.log('(3) Extracting Features');
  // let X = MOVIES_IN_LIST.map(toFeaturizedMovies(DICTIONARIES));

  // // Extract a couple of valuable coefficients
  // // Can be used in a later stage (e.g. feature scaling)
  // console.log('(4) Calculating Coefficients');
  // let { means, ranges } = getCoefficients(X);

  // // Synthesize Features:
  // // Missing features (such as budget, release, revenue)
  // // can be synthesized with the mean of the features
  // console.log('(5) Synthesizing Features');
  // X = synthesizeFeatures(X, means, [0, 1, 2, 3, 4, 5, 6]);

  // // Feature Scaling:
  // // Normalize features based on mean and range vectors
  // console.log('(6) Scaling Features \n');
  // X = scaleFeatures(X, means, ranges);

  // return {
  //   MOVIES_BY_ID,
  //   MOVIES_IN_LIST,
  //   X,
  // };
}