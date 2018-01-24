import { List } from 'immutable';
import isEqual from 'lodash/isEqual';
import transform from 'lodash/transform';
import isObject from 'lodash/isObject';

module.exports = {
  isEmptyArray: require('./isEmptyArray'),
  isEmptyObject: require('./isEmptyObject'),
  isFunction: require('./isFunction'),
  isImmutableCollection: require('./isImmutableCollection'),
  getMixedTypeValueRetriever: require('./mixedTypeValueRetriever'),
  isColumnsImmutable: require('./isColumnsImmutable'),
  isImmutableMap: require('./isImmutableMap'),
  eventHocs: require('./eventHocs'),
  last: (arrayOrList) => {
    if (arrayOrList == null) {
      throw new Error('arrayOrCollection is null');
    }

    if (List.isList(arrayOrList)) {
      return arrayOrList.last();
    }

    if (Array.isArray(arrayOrList)) {
      return arrayOrList[arrayOrList.length - 1];
    }

    throw new Error('Cant get last of: ' + typeof(arrayOrList));
  },
  deepDiff: function difference(object1, base1) {
    function changes(object, base) {
      return transform(object, function(result, value, key) {
        if (!isEqual(value, base[key])) {
          result[key] = (isObject(value) && isObject(base[key])) ? changes(value, base[key]) : value;
        }
      });
    }
    return changes(object1, base1);
  },
  areArraysEqual: (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = arr1.length; i--;) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }
};
