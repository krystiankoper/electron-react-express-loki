import axios from 'axios';

import { API_URL } from '../constants/constants';

const API = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
  },
});

export default API;
