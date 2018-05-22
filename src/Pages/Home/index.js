import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavLink from 'Components/NavLink';
import Strings from 'Services/Strings';
import styles from './styles';

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Typography>
        {Strings.homePlaceholderMessage}

        <NavLink to='/search' className={classes.link}>
          {Strings.searchEvents}
        </NavLink>
      </Typography>
    );
  }
}

export default withStyles(styles)(Home);
