import { isImmutable, Iterable } from 'immutable';

const isImmutableCollection = objToVerify => {
  if (typeof isImmutable === 'function') {
    return isImmutable(objToVerify)
  } else if (typeof Iterable.isIterable === 'function') {
    return Iterable.isIterable(objToVerify)
  }

  return false
}

module.exports = isImmutableCollection;
