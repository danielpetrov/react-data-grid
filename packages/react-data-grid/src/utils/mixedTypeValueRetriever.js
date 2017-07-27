const getMixedTypeValueRetriever = (isImmutable) => {
  let retObj = {};
  const retriever = (item, key, valueKey) => {
    if (valueKey === undefined) {
      return item[key];
    }

    return item[valueKey];
  };
  const immutableRetriever =  (immutable, key, valueKey) => {
    if (valueKey === undefined) {
      return immutable.get(key);
    }

    return immutable.get(valueKey);
  };

  retObj.getValue = isImmutable ? immutableRetriever : retriever;

  return retObj;
};

module.exports = getMixedTypeValueRetriever;
