import { utils } from 'react-data-grid';
const { getMixedTypeValueRetriever, isImmutableCollection } = utils;

const comparer = sortDirection => (a, b) => {
  if (a === null || a === undefined) {
    return 1;
  } else if (b === null || b === undefined) {
    return -1;
  } else if (a === b) {
    return 0;
  } else if (sortDirection === 'ASC') {
    return a < b ? -1 : 1;
  } else if (sortDirection !== 'ASC') {
    return a < b ? 1 : -1;
  }
  return 0;
};

const sortRows = (rows, sortColumn, sortDirection, sortComparator) => {
  const retriever = getMixedTypeValueRetriever(isImmutableCollection(rows));
  let compareHandler = sortComparator && typeof sortComparator === 'function' ? sortComparator : comparer;

  let rowComparer = (a, b) => {
    return compareHandler(sortDirection)(retriever.getValue(a, sortColumn), retriever.getValue(b, sortColumn));
  };
  if (sortDirection === 'NONE') {
    return rows;
  }
  return rows.slice().sort(rowComparer);
};

module.exports = sortRows;
module.exports.comparer = comparer;
