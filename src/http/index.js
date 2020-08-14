import Axios from 'axios'
import { stringify } from 'qs';
// 设置拦截器
const instance = Axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 10000
})

// 请求拦截
Axios.interceptors.request.use(
  (config) => {
    // 兼容 post 跨域问题
    console.log('请求拦截')
    if (config.method === 'post') {
      // 修改 Content-Type
      config.headers['Content-Type'] =
        'application/x-www-form-urlencoded';
      // 将对象参数转换为序列化的 URL 形式（key=val&key=val）
      config.data = stringify(config.data);
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default function http(url, data, method, params) {
  return instance({
    url, data, method, params
  }).then(res => {
    return res;
  }).catch(err => {
    console.log(err)
    return Promise.reject(err)
  })
}