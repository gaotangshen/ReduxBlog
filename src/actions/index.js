import axios from 'axios';

export const FEACH_POSTS = 'FEACH_POSTS';
const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=gaotang1234';

export function feachPosts() {
  const request = axios.get(`${BASE_URL}/posts${API_KEY}`);

  return {
    type: FEACH_POSTS,
    payload: request,
  };
}