import {requestIsLoading, requestSuccess, requestHasFailed} from './getImagesActions';

const flickr = new Flickr({
  api_key: "9e0af49ed247a608ce74d46373c005ac",
});

export default (searchText) => {
  return async (dispatch, getState) => {
    dispatch(requestIsLoading(true));

    flickr.photos.search({
      text: searchText.replace(' ', '+')
    }, function (err, result) {
      if (err) {
        dispatch(requestHasFailed(true));
        throw new Error(err);
      }
      const parsedResult = parsePhotos(result.photos.photo);
      dispatch(requestIsLoading(false));
      dispatch(requestSuccess(parsedResult));
    });
  }
};

const parsePhotos = photos => {
  const n = photos.length;
  let photoUrls = [], url = '';
  for (let i = 0; i < n; i++) {
    const {farm, secret, id, server, title} = photos[i];
    url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`;
    photoUrls.push({index: i, id, title, url});
  }
  return photoUrls;
};