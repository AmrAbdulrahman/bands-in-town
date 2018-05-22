import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import SnackbarActions from '../../Redux/Snackbar';
import styles from './styles';

class SnackbarBase extends Component {
  render() {
    const { classes, snackbar } = this.props;

    return (
      <Snackbar
        className={classnames({ [classes.error]: snackbar.messageType === 'error' })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={snackbar.open}
        onClose={this.props.close}
        autoHideDuration={3000}
        message={
          <span>{snackbar.message}</span>
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  snackbar: state.snackbar,
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(SnackbarActions.close()),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SnackbarBase)
);
