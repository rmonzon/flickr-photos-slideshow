import {REQUEST_IMAGES} from '../constants';
import {FETCHING, SUCCESS, FAILURE} from '../../core/constants';

export function imagesHasFailed(state = false, action) {
  switch (action.type) {
    case `${REQUEST_IMAGES}_${FAILURE}`:
      return action.hasFailed;
    default:
      return state;
  }
}

export function imagesIsLoading(state = false, action) {
  switch (action.type) {
    case `${REQUEST_IMAGES}_${FETCHING}`:
      return action.isLoading;
    default:
      return state;
  }
}

export function images(state = [], action) {
  switch (action.type) {
    case `${REQUEST_IMAGES}_${SUCCESS}`:
      return action.images;
    default:
      return state;
  }
}
