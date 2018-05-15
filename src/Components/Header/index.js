import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import NavLink from '../NavLink';

import Strings from '../../Services/Strings';
import styles from './styles';

export class HeaderBase extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position='static' className={classes.appBar}>
          <Toolbar>
            <Typography
              variant='title'
              color='inherit'
              className={classes.flex}
            >
              <NavLink to='/' className={classes.homeLink} activeClassName={classes.homeLinkActive}>
                { Strings.navHeadline }
              </NavLink>
            </Typography>

            <NavLink to='/search' className={classes.navLink}>
              <SearchIcon className={classes.navLinkIcon} />
              {Strings.search}
            </NavLink>

            <NavLink to='/coming-soon' className={classes.navLink}>
              <DateRangeIcon className={classes.navLinkIcon} />
              {Strings.comingSoon}
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

HeaderBase.propTypes = {
  classes: PropTypes.object,
  toggleDrawer: PropTypes.func,
  navigate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  navigate: to => dispatch(push(to)),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(HeaderBase));
