import _ from 'lodash';
import { FEACH_POSTS } from "../actions/index";

export default function(state = {}, action) {
  switch(action.type) {
    case FEACH_POSTS:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
}