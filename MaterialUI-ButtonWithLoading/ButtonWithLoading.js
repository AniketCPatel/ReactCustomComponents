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

ButtonWithLoading.propTypes = {
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
