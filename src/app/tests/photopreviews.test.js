/* eslint-disable no-unused-vars */

import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import PhotoPreviews from '../components/PhotoPreviews';

const props = {
  selected: null,
  noData: true,
  images: [],
  imagesIsLoading: false,
  handleClickPreview: sinon.stub()
};

const images = [
  {id: 1, index: 0, title: 'title', url: 'url'},
  {id: 2, index: 1, title: 'title', url: 'url'},
  {id: 3, index: 2, title: 'title', url: 'url'},
  {id: 4, index: 3, title: 'title', url: 'url'}
];

it('PhotoPreviews component renders itself and subcomponents', () => {
  const wrapper = shallow(<PhotoPreviews {...props} />);

  expect(wrapper.find('.previews__container').length).toBe(1);
  expect(wrapper.find('.previews__overflow-container').length).toBe(1);

  wrapper.setProps({images, selected: {id: 1, index: 0, title: 'title', url: 'url'}, noData: false});
  expect(wrapper.find('.previews__box').length).toBe(4);
  expect(wrapper.find('.previews__no-data').length).toBe(0);
});

it('PhotoPreviews renders message when there is no data to display', () => {
  const wrapper = shallow(<PhotoPreviews {...props} />);
  expect(wrapper.find('.previews__no-data').length).toBe(1);
  expect(wrapper.find('.previews__no-data').text()).toBe('Nothing to show here.');
});

it('Simulates click on a photo preview', () => {
  const wrapper = shallow(<PhotoPreviews {...props} />);
  const handleClickPreview = sinon.spy();
  wrapper.setProps({handleClickPreview, images, selected: {id: 1, index: 0, title: 'title', url: 'url'}, noData: false});
  wrapper.find('.preview-selected').simulate('click');
  expect(handleClickPreview.calledOnce).toBe(true);
});
