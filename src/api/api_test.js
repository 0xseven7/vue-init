import { httpClient, handleError } from './index'
console.log(httpClient.request)
export const getTest = () => {
  return httpClient.request({
    method: 'get',
    url: '/'
  }).then(res => {
    return res.data
  }).catch(handleError)
}
