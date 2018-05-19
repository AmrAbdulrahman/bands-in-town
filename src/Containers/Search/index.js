import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchFilters from './Filters';
import SearchResults from './Results';
import EventsActions from '../../Redux/Events';

class Search extends Component {
  render() {
    return (
      <div>
        <SearchFilters />
        <SearchResults />
      </div>
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
