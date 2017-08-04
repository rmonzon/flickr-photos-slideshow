import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const PhotoPreviews = ({imagesIsLoading, noData, images, selected, handleClickPreview}) => (
  <div className={cx('previews__container', {'hidden': noData || imagesIsLoading})}>
    <div className="previews__overflow-container">
      {
        !imagesIsLoading ?
          images.map(preview => (
            <div
              key={preview.id}
              className={cx('previews__box', {'preview-selected': selected.index === preview.index})}
              onClick={handleClickPreview}>
              <img data-index={preview.index} title={preview.title} src={preview.url} />
            </div>
          )) : null
      }
      { noData && <div className="previews__no-data">Nothing to show here.</div> }
    </div>
  </div>
);

PhotoPreviews.defaultProps = {
  selected: null
};

PhotoPreviews.propTypes = {
  selected: PropTypes.object,
  noData: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
  imagesIsLoading: PropTypes.bool.isRequired,
  handleClickPreview: PropTypes.func.isRequired
};

export default PhotoPreviews;
