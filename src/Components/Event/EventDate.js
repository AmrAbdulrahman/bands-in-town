import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

class EventDate extends Component {
  render() {
    const { date, fromFormat, toFormat } = this.props;

    return (
      <Typography id="date" gutterBottom variant="headline">
        {moment(date, fromFormat).format(toFormat)}
      </Typography>
    );
  }
}

EventDate.propTypes = {
  date: PropTypes.string.isRequired,
  fromFormat: PropTypes.string,
  toFormat: PropTypes.string,
};

EventDate.defaultProps = {
  fromFormat: 'YYYY-MM-DDThh:mm:ss',
  toFormat: 'dddd, MMMM Do YYYY',
};

export default EventDate;
