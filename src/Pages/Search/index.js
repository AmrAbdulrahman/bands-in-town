import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFilters from './Filters';
import SearchResults from './Results';
import EventsActions from '../../Redux/Events';

class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchFilters />
        <SearchResults />
      </React.Fragment>
    );
  }

  componentWillUnmount() {
    this.props.resetSearch();
  }
}

const mapDispatchToProps = dispatch => ({
  resetSearch: () => dispatch(EventsActions.reset()),
});

export default connect(null, mapDispatchToProps)(Search);
