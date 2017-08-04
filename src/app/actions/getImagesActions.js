import {REQUEST_IMAGES} from '../constants';
import {FETCHING, SUCCESS, FAILURE} from '../../core/constants';

export function requestHasFailed(bool) {
  return {
    type: `${REQUEST_IMAGES}_${FAILURE}`,
    hasFailed: bool
  };
}

export function requestIsLoading(bool) {
  return {
    type: `${REQUEST_IMAGES}_${FETCHING}`,
    isLoading: bool
  };
}

export function requestSuccess(payload) {
  return {
    type: `${REQUEST_IMAGES}_${SUCCESS}`,
    images: payload
  };
}
