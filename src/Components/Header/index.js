import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import NavLink from 'Components/NavLink';
import Strings from 'Services/Strings';
import styles from './styles';

export class HeaderBase extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <NavLink to="/home" className={classes.homeLink} activeClassName={classes.homeLinkActive}>
                {Strings.navHeadline}
              </NavLink>
            </Typography>

            <NavLink to="/" className={classes.navLink}>
              <SearchIcon className={classes.navLinkIcon} />
              {Strings.search}
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
};

export default withStyles(styles)(HeaderBase);
