/* eslint-disable no-unused-vars */

import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import PhotoSection from '../components/PhotoSection';

const props = {
  selected: null,
  noData: true,
  images: [],
  slideIndex: 0,
  goToPrevImage: sinon.stub(),
  goToNextImage: sinon.stub(),
  imagesIsLoading: false
};

it('PhotoSection component renders itself and subcomponents', () => {
  const wrapper = shallow(<PhotoSection {...props} />);

  expect(wrapper.find('.image__container').length).toBe(1);
  expect(wrapper.find('.left-arrow-container').length).toBe(1);
  expect(wrapper.find('.left-arrow').length).toBe(1);
  expect(wrapper.find('.right-arrow-container').length).toBe(1);
  expect(wrapper.find('.right-arrow').length).toBe(1);

  wrapper.setProps({selected: {title: 'title', url: 'url'}});
  expect(wrapper.find('#main-photo').length).toBe(1);
  expect(wrapper.find('.image__title').length).toBe(1);

  wrapper.setProps({selected: null, noData: false});
  expect(wrapper.find('.left-arrow-container.hidden').length).toBe(0);
  expect(wrapper.find('.right-arrow-container.hidden').length).toBe(0);
});

it('Simulates button goToNextPhoto click', () => {
  const wrapper = shallow(<PhotoSection {...props} />);
  const goToNextImage = sinon.spy();
  wrapper.setProps({goToNextImage, selected: {title: 'title', url: 'url'}, images: [{title: 'title', url: 'url'}]});
  wrapper.find('.right-arrow-container').simulate('click');
  expect(goToNextImage.calledOnce).toBe(true);
});

it('Simulates button goToPrevPhoto click', () => {
  const wrapper = shallow(<PhotoSection {...props} />);
  const goToPrevImage = sinon.spy();
  wrapper.setProps({goToPrevImage, selected: {title: 'title', url: 'url'}, images: [{title: 'title', url: 'url'}]});
  wrapper.find('.left-arrow-container').simulate('click');
  expect(goToPrevImage.calledOnce).toBe(true);
});
