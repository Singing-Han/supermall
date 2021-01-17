import axios from 'axios';
import {
  BASE_URL,
  TIME_OUT
} from 'common/const';

export function request(config) {

  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
  });

  // 过滤器(拦截器)
  instance.interceptors.response.use(res => {
    return res.data
  })
  
  return instance(config)
}
