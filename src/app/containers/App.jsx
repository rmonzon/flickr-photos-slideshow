import React, { Component } from 'react';
import {connect} from 'react-redux';

import doGetImagesAsync from '../actions/doGetImagesAsync';
import App from '../components/App';

const mapDispatchToProps = dispatch => ({
  doGetImagesAsync(...args) {
    dispatch(doGetImagesAsync(...args));
  }
});

const mapStateToProps = state => {
  return {
    images: state.images,
    imagesHasFailed: state.imagesHasFailed,
    imagesIsLoading: state.imagesIsLoading
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
