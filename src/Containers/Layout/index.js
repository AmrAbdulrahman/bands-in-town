import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

import Header from 'Components/Header';
import styles from './styles';

class Layout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />

        <main className={classes.content}>
          { this.props.children }
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Layout));
