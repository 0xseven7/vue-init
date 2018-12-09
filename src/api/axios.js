import axios from 'axios'

import { baseURL } from '@/config'
export class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseURL = baseUrl
  }

  getInsideConfig () {
    return {
      baseURL: this.baseURL,
      headers: {
        //
      }
    }
  }

  interceptor (instance, url) {
    // 添加全局loading
    instance.interceptors.request.use((config) => {
      console.log('----请求url: ' + config.url)
      console.log('----请求数据: ' + config.data)
      return config
    }, error => Promise.reject(error))
    instance.interceptors.response.use(res => {
      console.log('++++++返回数据', res)
      return res
    }, error => Promise.reject(error))
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptor(instance, options.url)
    console.log(options)
    return instance(options)
  }
}
