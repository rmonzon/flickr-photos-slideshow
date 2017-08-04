import { combineReducers } from 'redux'
import {imagesHasFailed, imagesIsLoading, images} from '../../login/reducers';

export default combineReducers({
  imagesHasFailed,
  imagesIsLoading,
  images
});
