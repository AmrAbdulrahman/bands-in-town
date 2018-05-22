import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import isNull from 'lodash/isNull';
import map from 'lodash/map';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Event from 'Components/Event';
import Artist from 'Components/Artist';
import LoadingOverlay from 'Components/LoadingOverlay';
import Strings from 'Services/Strings';
import styles from './styles';

class EventsResults extends Component {
  render() {
    const { classes, events } = this.props;
    const { results } = events;

    if (isNull(results)) {
      return (
        <Typography variant="subheading" className={classes.placeholderMessage}>
          {Strings.searchPlaceholderMessage}
        </Typography>
      );
    }

    const { list, byId } = results;

    if (list.length === 0) {
      return (
        <Typography variant="subheading" className={classnames(classes.placeholderMessage, classes.noResultsMessage)}>
          {Strings.noResultsFound}
        </Typography>
      );
    }

    const eventsList = map(list, id => byId[id]);

    return (
      <Grid container spacing={16}>
        <LoadingOverlay active={events.loading} />
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.artistWrapper}>
            <Artist name={events.results.name} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Grid container className={classes.events} spacing={16}>
            {map(eventsList, event => (
              <Grid item xs={12} md={6} lg={4} xl={3} key={event.id}>
                <Event event={event} className={classes.event} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

EventsResults.propTypes = {
  classes: PropTypes.object,
  events: PropTypes.object,
}

const mapStateToProps = state => ({
  events: state.events,
});

export default withStyles(styles)(
  connect(mapStateToProps, null)(EventsResults)
);
