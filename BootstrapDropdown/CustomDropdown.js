import React from 'react';
import PropTypes from 'prop-types';

const CustomDropdown = ({
  value,
  label,
  data,
  onChange,
  name,
  id,
  error = false,
  required = false,
  disabled = false,
}) => {
  return (
    <div className="form-group">
      <select
        id={id}
        className={
          error ? 'form-control border border-danger' : 'custom-select '
        }
        name={name}
        onChange={onChange}
        required={required}
        value={value}
        disabled={disabled}
      >
        <option value="">Select options</option>
        {data.map((i, id) => (
          <option key={id} value={i.name}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor={id} style={{ fontSize: '12px', top: 8 }}>
        {label}
        {required && <span className="text-danger "> *</span>}
      </label>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

CustomDropdown.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.any,
};
export default CustomDropdown;
