import React, { Component } from 'react';
import LoadingBar from 'Components/LoadingBar';
import Snackbar from 'Components/Snackbar';

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
