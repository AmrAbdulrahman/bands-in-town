import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EnhancedNavLink extends Component {
  // @TODO: ideally NavLink should automatically be subscribed to
  // route changes without manual handling, due to time limitation
  // I took the decision to keep it as TODO and move forward.
  render() {
    const { classes, router, to, className, children } = this.props;
    const isActive = (router.location.pathname === to);
    const isActiveClassName = this.props.activeClassName || classes.active;

    return (
      <NavLink to={to} className={classnames(classes.root, className, { [isActiveClassName]: isActive })}>
        {children}
      </NavLink>
    );
  }
}

EnhancedNavLink.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
};

const mapStateToProps = state => ({
  router: state.router,
});

export default connect(mapStateToProps)(
  withStyles(styles)(EnhancedNavLink)
);
