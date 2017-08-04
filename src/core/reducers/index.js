import { combineReducers } from 'redux'
import {imagesHasFailed, imagesIsLoading, images} from '../../app/reducers';

export default combineReducers({
  imagesHasFailed,
  imagesIsLoading,
  images
});
