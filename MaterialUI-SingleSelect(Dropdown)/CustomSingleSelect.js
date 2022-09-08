import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

const CustomSingleSelect = (props) => {
  const {
    name,
    label,
    value,
    onChange,
    items,
    idMapping = 'id',
    nameMapping = 'name',
    required = false,
    error = false,
    disabled = false,
    helperText = '',
  } = props;
  return (
    <TextField
      required={required}
      disabled={disabled}
      helperText={helperText}
      error={error}
      id={name}
      label={label}
      name={name}
      select
      margin="dense"
      type="text"
      variant="outlined"
      autoComplete="off"
      fullWidth
      value={value || '---select---'}
      onChange={(e) => {
        if (e.target.value === '---select---') {
          onChange({
            disablePersist: true,
            target: {
              name,
              value: null,
            },
          });
        } else {
          onChange(e);
        }
      }}
    >
      <MenuItem value="---select---">---select---</MenuItem>
      {items.map((data) => (
        <MenuItem key={data[idMapping]} value={data[idMapping]}>
          {data[nameMapping]}
        </MenuItem>
      ))}
    </TextField>
  );
};

CustomSingleSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
};

export default CustomSingleSelect;
