import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { withRouter } from 'react-router';
import queryString from 'qs';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Strings from 'Services/Strings';
import EventsActions from '../../Redux/Events';
import styles from './styles';

class EventsFilters extends Component {
  componentDidMount() {
    const { location } = this.props;

    if (location.search) {
      this.filters = this.queryParams;

      // wait for filters to be set in the store
      setTimeout(() => {
        // automatically search if 'name' exists and 'dates' are valid
        if (this.filtersAreValid) {
          this.props.searchEvents();
        }
      });
    }
  }

  get queryParams() {
    const { location } = this.props;
    let search = location.search;

    // remove '?' at the beginning
    if (search.startsWith('?')) {
      search = search.substr(1);
    }

    return queryString.parse(search);
  }

  // merges 'updates' with existing 'query-params'
  set queryParams(updates) {
    this.props.history.push({
      search: queryString.stringify({
        ...this.queryParams,
        ...updates,
      }),
    });
  }

  get filters() {
    return this.props.events.filter;
  }

  set filters(updates) {
    this.props.updateEventsFilter(updates);
  }

  get datesAreValid() {
    const { dateFrom, dateTo } = this.filters;

    if (!dateFrom || !dateTo) {
      return true;
    }

    const format = 'YYYY-MM-DD';
    const dateFromParsed = moment(dateFrom, format);
    const dateToParsed = moment(dateTo, format);

    return dateFromParsed.isBefore(dateToParsed);
  }

  get filtersAreValid() {
    return this.filters.name && this.filters.name !== '.' && this.datesAreValid;
  }

  updateNameFilter = e => {
    this.updateSearchCriteria({
      name: e.target.value,
    });
  };

  updateFromDateFilter = e => {
    this.updateSearchCriteria({
      dateFrom: e.target.value,
    });
  };

  updateToDateFilter = e => {
    this.updateSearchCriteria({
      dateTo: e.target.value,
    });
  };

  updateSearchCriteria = updates => {
    this.filters = updates;
    this.queryParams = updates;
  };

  onSearchSubmit = e => {
    if (e) {
      e.preventDefault();
    }

    if (this.filtersAreValid) {
      this.props.searchEvents();
    }
  };

  render() {
    const { classes, events } = this.props;

    return (
      <form className={classes.form} noValidate autoComplete="off" onSubmit={this.onSearchSubmit}>
        <Grid container spacing={16}>
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              id="search"
              label={Strings.search}
              placeholder={Strings.searchByArtistName}
              className={classes.textField}
              value={events.filter.name}
              disabled={events.loading}
              onChange={this.updateNameFilter}
              autoFocus={true}
              InputProps={{
                className: classes.searchInput,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={2}>
            <TextField
              fullWidth
              type="date"
              label={Strings.from}
              value={events.filter.dateFrom}
              onChange={this.updateFromDateFilter}
              className={classes.datePicker}
              disabled={events.loading}
              error={!this.datesAreValid}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={2}>
            <TextField
              fullWidth
              type="date"
              label={Strings.to}
              value={events.filter.dateTo}
              onChange={this.updateToDateFilter}
              className={classes.datePicker}
              disabled={events.loading}
              error={!this.datesAreValid}
              helperText={this.datesAreValid ? Strings.filterEventsByDate : Strings.dateFromMustBeBeforeDateTo}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <div className={classes.searchButtonWrapper}>
              <Button
                variant="raised"
                color="primary"
                className={classes.searchButton}
                onClick={this.onSearchSubmit}
                disabled={!this.filtersAreValid || events.loading}>
                Search <SearchIcon />
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    );
  }
}

EventsFilters.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
  events: PropTypes.object,
  updateEventsFilter: PropTypes.func,
}

const mapStateToProps = state => ({
  events: state.events,
});

const mapDispatchToProps = dispatch => ({
  updateEventsFilter: updates => dispatch(EventsActions.updateFilter(updates)),
  searchEvents: () => dispatch(EventsActions.search()),
});

export default withRouter(
  withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(EventsFilters)
  )
);
