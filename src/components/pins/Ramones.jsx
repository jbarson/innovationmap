import React from 'react';
import PropTypes from 'prop-types';
import Ramones from './../../assets/pin-ramones.svg'

const RamonesPin = props => {
  return (
    <Ramones />
  );
};

RamonesPin.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
RamonesPin.defaultProps = {
   width: 128,
   height: 128,
};

export default RamonesPin;