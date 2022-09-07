import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  id,
  value,
  label,
  type,
  onChange,
  name,
  error = false,
  required = false,
  disabled = false,
}) => {
  return (
    <div className="form-group">
      <input
        id={id}
        type={type || 'text'}
        value={value}
        onChange={onChange}
        name={name}
        className={error ? 'form-control border border-danger' : 'form-control'}
        required={required}
        disabled={disabled}
        min={type === 'number' ? 0 : undefined}
      />
      <label htmlFor={name} style={{ fontSize: '12px', top: 8 }}>
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.any,
};

export default TextField;
