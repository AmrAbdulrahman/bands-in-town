// Global loading bar
import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading-bar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class LoadingBarBase extends Component {
  render() {
    const { classes } = this.props;

    return (
      <LoadingBar
        className={classes.root}
        updateTime={100}
        maxProgress={90}
        progressIncrease={5}
      />
    );
  }
}

LoadingBarBase.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(LoadingBarBase);
