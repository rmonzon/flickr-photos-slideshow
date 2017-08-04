import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({value, imagesIsLoading, handleOnChange, handleOnSubmit}) => (
  <div className="search-box__container">
    <form className="search-box__form" onSubmit={handleOnSubmit}>
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
          onChange={handleOnChange} />
        <div className="search-box__icon" />
      </div>
    </form>
  </div>
);

SearchBar.propTypes = {
  images: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  imagesIsLoading: PropTypes.bool.isRequired
};

export default SearchBar;