import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import _truncate from 'lodash/truncate';

class EventDescription extends Component {
  render() {
    const { description, truncate, truncateAfter, omissionStr } = this.props;

    if (!description) {
      return null;
    }

    return (
      <Typography id="description" component="p">
        {
          truncate ? _truncate(description, {
            length: truncateAfter,
            omission: omissionStr,
          }) : (
            description
          )
        }
      </Typography>
    );
  }
}

EventDescription.propTypes = {
  description: PropTypes.string,
  truncateAfter: PropTypes.number,
  omissionStr: PropTypes.string,
  truncate: PropTypes.bool,
};

EventDescription.defaultProps = {
  truncate: true,
  truncateAfter: 100,
  omissionStr: ' [...]',
};

export default EventDescription;
