import { createSelector } from 'reselect';
import { utils } from 'react-data-grid';
const { isEmptyArray, isEmptyObject } = utils;
const groupRows = require('./RowGrouper');
const filterRows = require('./RowFilterer');
const sortRows = require('./RowSorter');

const getInputRows = (state) => state.rows;
const getFilters = (state) => state.filters;
const getFilteredRows = createSelector([getFilters, getInputRows], (filters, rows = []) => {
  if (!filters || isEmptyObject(filters)) {
    return rows;
  }
  return filterRows(filters, rows);
});

const getSortColumn = state => state.sortColumn;
const getSortDirection = state => state.sortDirection;
const getSortComparator = state => state.sortComparator;
const getSortedRows = createSelector([getFilteredRows, getSortColumn, getSortDirection, getSortComparator], (rows, sortColumn, sortDirection, sortComparator) => {
  if (!sortDirection && !sortColumn) {
    return rows;
  }
  return sortRows(rows, sortColumn, sortDirection, sortComparator);
});

const getGroupedColumns = (state) => state.groupBy;
const getExpandedRows = (state) => state.expandedRows;
const getFlattenedGroupedRows = createSelector([getSortedRows, getGroupedColumns, getExpandedRows], (rows, groupedColumns, expandedRows = {}) => {
  if (!groupedColumns || isEmptyObject(groupedColumns) || isEmptyArray(groupedColumns)) {
    return rows;
  }
  return groupRows(rows, groupedColumns, expandedRows);
});

const getSelectedKeys = (state) => state.selectedKeys;
const getRowKey = (state) => state.rowKey;
const getSelectedRowsByKey = createSelector([getRowKey, getSelectedKeys, getInputRows], (rowKey, selectedKeys, rows = []) => {
  return selectedKeys.map(k => {
    return rows.filter(r => {
      return r[rowKey] === k;
    })[0];
  });
});

const Selectors = {
  getRows: getFlattenedGroupedRows,
  getSelectedRowsByKey: getSelectedRowsByKey
};
module.exports = Selectors;
