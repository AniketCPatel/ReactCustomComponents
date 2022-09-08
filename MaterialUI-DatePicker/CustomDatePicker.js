import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const ButtonWithLoading = (props) => {
  const classes = useStyles();
  const {
    loading,
    onClick,
    color,
    label,
    disableFullWidth,
    width,
    size,
    startIcon,
  } = props;

  return (
    <FormControl fullWidth={disableFullWidth ? false : true}>
      <div className={classes.wrapper}>
        <Button
          disabled={loading}
          onClick={onClick}
          color={color ? color : 'primary'}
          variant="contained"
          fullWidth
          style={{ width: disableFullWidth && width }}
          size={size}
          startIcon={startIcon || null}
        >
          {label}
        </Button>
        {loading && (
          <CircularProgress size={22} className={classes.buttonProgress} />
        )}
      </div>
    </FormControl>
  );
};

ButtonWithLoading.propTypes = {import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PropTypes from 'prop-types';

const CustomDatePicker = ({
  id,
  name,
  label,
  format,
  value,
  onChange,
  helperText,
  error,
  required,
  disabled,
  minDate,
}) => {
  let myMinDate = new Date('1900-01-01');
  try {
    if (minDate) {
      myMinDate = new Date(minDate);
    } else {
      throw new Error('No minDate is passed');
    }
  } catch (error) {
    myMinDate = new Date('1900-01-01');
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        required={required}
        disabled={disabled}
        autoComplete="off"
        placeholder="DD-MM-YYYY"
        autoOk
        fullWidth
        inputVariant="outlined"
        margin="dense"
        id={id}
        label={label}
        format={format || 'dd-MM-yyyy'}
        name={name}
        value={value || null}
        onChange={(e) => {
          const event = {
            disablePersist: true,
            target: {
              name: name,
              value: e
                ? e.toString() === 'Invalid Date'
                  ? undefined
                  : e
                : undefined,
            },
          };
          onChange(event);
        }}
        helperText={helperText || ''}
        error={error ? true : false}
        minDate={myMinDate}
      />
    </MuiPickersUtilsProvider>
  );
};
CustomDatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  format: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.any,
  disabled: PropTypes.any,
  minDate: PropTypes.any,
};
export default CustomDatePicker;

  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disableFullWidth: PropTypes.bool,
  width: PropTypes.number,
  size: PropTypes.string,
  startIcon: PropTypes.any,
};
export default ButtonWithLoading;
