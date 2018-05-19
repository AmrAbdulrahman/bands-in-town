import React, { Component } from 'react';
import LoadingBar from '../LoadingBar';
import Snackbar from '../Snackbar';

class Head extends Component {
  render() {
    return (
      <div>
        <LoadingBar />
        <Snackbar />
      </div>
    );
  }
}

export default Head;
