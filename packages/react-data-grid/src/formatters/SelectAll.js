import React from 'react';
import PropTypes from 'prop-types';

const SelectAll = (props) => {
  return (
    <div className="react-grid-checkbox-container checkbox-align">
      <input
        className="react-grid-checkbox"
        type="checkbox"
        name={props.id}
        id={props.id}
        ref={props.inputRef}
        onChange={props.onChange}
      />
      <label htmlFor={props.id} className="react-grid-checkbox-label" />
    </div>
  );
};

SelectAll.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  inputRef: PropTypes.func
};

export default SelectAll;
