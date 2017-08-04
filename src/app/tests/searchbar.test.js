/* eslint-disable no-unused-vars */

import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import SearchBar from '../components/SearchBar';

const props = {
  value: 'dogs',
  imagesIsLoading: false,
  handleOnChange: sinon.stub(),
  handleOnSubmit: sinon.stub()
};

it('SearchBar component renders itself and subcomponents', () => {
  const wrapper = shallow(<SearchBar {...props} />);

  expect(wrapper.find('.search-box__container').length).toBe(1);
  expect(wrapper.find('.search-box__form').length).toBe(1);
  expect(wrapper.find('.search-box__input-container').length).toBe(1);
  expect(wrapper.find('input.input-field').length).toBe(1);
  expect(wrapper.find('input.input-field').prop('placeholder')).toBe('Search...');
  expect(wrapper.find('.search-box__icon').length).toBe(1);
});

it('Simulates submit event on search bar', () => {
  const wrapper = shallow(<SearchBar {...props} />);
  const handleOnSubmit = sinon.spy();
  wrapper.setProps({handleOnSubmit});
  wrapper.find('form').simulate('submit');
  expect(handleOnSubmit.calledOnce).toBe(true);
});
