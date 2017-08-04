import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Spinner from '../../core/components/Spinner';
import '../../styles/app.scss';
import arrowRight from '../../images/arrow-right.png';
import arrowLeft from '../../images/arrow-left.png';
import defaultBg from '../../images/placeholder-img.jpg';

class App extends Component {
  state = {
    value: '',
    slideIndex: 0,
    selectedImage: null,
  };

  handleOnChange = e => {
    this.setState({value: e.target.value});
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const {doGetImagesAsync} = this.props;
    this.setState({selectedImage: null, slideIndex: 0});
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

  onImageLoad = e => {
    console.log('hereeeee', 'asasasas');
  };

  render() {
    const {value, selectedImage, slideIndex} = this.state;
    const {images, imagesIsLoading} = this.props;
    const selected = selectedImage || images[0];
    const noData = images.length === 0 && !imagesIsLoading;

    return (
      <div className="app__container">
        <div className="search-box__container">
          <form className="search-box__form" onSubmit={this.handleOnSubmit}>
            <div className="search-box__input-container">
              <input
                id="search-bar"
                name="search"
                type="text"
                autoComplete="off"
                autoFocus
                value={value}
                disabled={imagesIsLoading}
                className="input-field"
                placeholder="Search..."
                onChange={this.handleOnChange} />
              <div className="search-box__icon" />
            </div>
          </form>
        </div>

        {imagesIsLoading && <Spinner classNames={'main__spinner'} />}

        {
          noData ?
            <div>
              <div className="image__container--no-data" />
              <h1>Find your inspiration.</h1>
            </div> :
            <div>
              <div className="image__container">
                <div className={cx('left-arrow-container', {'hidden': noData || imagesIsLoading})} onClick={this.goToPrevImage}>
                  <img className="left-arrow" src={arrowLeft} />
                </div>

                { selected &&
                  <img
                    title={selected.title}
                    src={selected.url}
                    onLoad={this.onImageLoad} />
                }

                {selected &&
                <div className="image__title">
                  <span>{slideIndex + 1} / {images.length}</span>
                </div>
                }

                <div className={cx('right-arrow-container', {'hidden': noData || imagesIsLoading})} onClick={this.goToNextImage}>
                  <img className="right-arrow" src={arrowRight} />
                </div>
              </div>

              <div className={cx('previews__container', {'hidden': noData || imagesIsLoading})}>
                <div className="previews__overflow-container">
                  {
                    !imagesIsLoading ?
                      images.map(preview => (
                        <div
                          key={preview.id}
                          className={cx('previews__box', {'preview-selected': selected.index === preview.index})}
                          onClick={this.handleClickPreview}>
                          <img data-index={preview.index} title={preview.title} src={preview.url} />
                        </div>
                      )) : null
                  }
                  { noData && <div className="previews__no-data">Nothing to show here.</div> }
                </div>
              </div>
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
