import * as axios from 'axios';

const CONFIG = {
  baseURL: config.BASE_URL,
};

const createHTTP = () => axios.create(CONFIG);
const http = createHTTP();

export const GET = url => http.get(url);
export const POST = (url, data={}) => http.post(url, data);
export const PATCH = (url, data) => http.patch(url, data);
export const DELETE = url => http.delete(url);
