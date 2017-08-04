import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../core/components/Spinner';
import PhotoPreviews from './PhotoPreviews';
import PhotoSection from './PhotoSection';
import SearchBar from './SearchBar';
import '../../styles/app.scss';

class App extends Component {
  state = {
    value: '',
    slideIndex: 0,
    selectedImage: null
  };

  handleOnChange = e => {
    this.setState({value: e.target.value});
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const {doGetImagesAsync} = this.props;
    this.setState({slideIndex: 0});
    doGetImagesAsync(this.state.value);
  };

  handleClickPreview = e => {
    const {images} = this.props;
    const index = parseInt(e.target.dataset.index, 10);
    this.setState({slideIndex: index, selectedImage: images[index]});
  };

  goToNextImage = () => {
    const {slideIndex} = this.state;
    const {images} = this.props;
    if (slideIndex + 1 < images.length) {
      const index = slideIndex + 1;
      this.setState({slideIndex: index, selectedImage: images[index]});
    }
  };

  goToPrevImage = () => {
    const {slideIndex} = this.state;
    const {images} = this.props;
    if (slideIndex - 1 >= 0) {
      const index = slideIndex - 1;
      this.setState({slideIndex: index, selectedImage: images[index]});
    }
  };

  render() {
    const {value, slideIndex} = this.state;
    const {images, imagesIsLoading} = this.props;
    const selected = imagesIsLoading ? null : images[slideIndex];
    const noData = images.length === 0 && !imagesIsLoading;

    return (
      <div className="app__container">
        <SearchBar
          images={images}
          value={value}
          imagesIsLoading={imagesIsLoading}
          handleOnSubmit={this.handleOnSubmit}
          handleOnChange={this.handleOnChange} />

        {imagesIsLoading && <Spinner classNames={'main__spinner'} />}

        {
          noData ?
            <div>
              <div className="image__container--no-data" />
              <h1>Find your inspiration.</h1>
            </div> :
            <div>
              <PhotoSection
                images={images}
                imagesIsLoading={imagesIsLoading}
                noData={noData}
                selected={selected}
                slideIndex={slideIndex}
                goToPrevImage={this.goToPrevImage}
                goToNextImage={this.goToNextImage} />

              <PhotoPreviews
                images={images}
                imagesIsLoading={imagesIsLoading}
                noData={noData}
                selected={selected}
                handleClickPreview={this.handleClickPreview} />
            </div>
        }
      </div>
    );
  }
}

App.propTypes = {
  images: PropTypes.array.isRequired,
  imagesIsLoading: PropTypes.bool.isRequired
};

export default App;
export {App};
