import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import arrowRight from '../../images/arrow-right.png';
import arrowLeft from '../../images/arrow-left.png';

const PhotoSection = ({imagesIsLoading, noData, slideIndex, images, selected, goToPrevImage, goToNextImage}) => (
  <div className="image__container">
    <div className={cx('left-arrow-container', {'hidden': noData || imagesIsLoading})} onClick={goToPrevImage}>
      <img className="left-arrow" src={arrowLeft} />
    </div>

    { selected && <img title={selected.title} src={selected.url} /> }

    {selected &&
    <div className="image__title">
      <span>{slideIndex + 1} / {images.length}</span>
    </div>
    }

    <div className={cx('right-arrow-container', {'hidden': noData || imagesIsLoading})} onClick={goToNextImage}>
      <img className="right-arrow" src={arrowRight} />
    </div>
  </div>
);

PhotoSection.defaultProps = {
  selected: null
};

PhotoSection.propTypes = {
  selected: PropTypes.object,
  noData: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
  slideIndex: PropTypes.number.isRequired,
  goToPrevImage: PropTypes.func.isRequired,
  goToNextImage: PropTypes.func.isRequired,
  imagesIsLoading: PropTypes.bool.isRequired
};

export default PhotoSection;