import React from 'react';
import PropTypes from 'prop-types';

const SelectAll = (props) => {
  return (
    <div className="react-grid-checkbox-container checkbox-align">
      <input
        className="react-grid-checkbox"
        type="checkbox"
        name={props.checkBoxId}
        id={props.checkBoxId}
        ref={props.inputRef}
        onChange={props.onChange}
      />
      <label htmlFor={props.checkBoxId} className="react-grid-checkbox-label" />
    </div>
  );
};

SelectAll.propTypes = {
  checkBoxId: PropTypes.string,
  onChange: PropTypes.func,
  inputRef: PropTypes.func
};

export default SelectAll;
