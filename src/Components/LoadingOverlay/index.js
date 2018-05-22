import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class LoadingOverlay extends Component {
  render() {
    const { classes, active } = this.props;

    return !active ? null : (
      <div className={classes.root}>
        <img alt="loading" src={require('Img/loading-icon.svg') } />
      </div>
    );
  }
}

LoadingOverlay.propTypes = {
  active: PropTypes.bool,
};

LoadingOverlay.defaultProps = {
  active: false,
};

export default withStyles(styles)(LoadingOverlay);
