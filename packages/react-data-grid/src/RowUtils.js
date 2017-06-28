import { isImmutableCollection } from './utils'

let RowUtils = {
  get: function(row, property) {
    if (typeof row.get === 'function') {
      return row.get(property);
    }

    return row[property];
  },
  isRowSelected(keys, indexes, isSelectedKey, rowData, rowIdx) {
    if (indexes && Object.prototype.toString.call(indexes) === '[object Array]') {
      return indexes.indexOf(rowIdx) > -1;
    } else if (keys && keys.rowKey && keys.values && Object.prototype.toString.call(keys.values) === '[object Array]') {
      if (isImmutableCollection(rowData)) {
        return keys.values.indexOf(rowData.get(keys.rowKey)) > -1;
      }
      return keys.values.indexOf(rowData[keys.rowKey]) > -1;
    } else if (isSelectedKey && rowData && typeof isSelectedKey === 'string') {
      if (isImmutableCollection(rowData)) {
        return rowData.get(isSelectedKey);
      }
      return rowData[isSelectedKey];
    }
    return false;
  }
};

module.exports = RowUtils;
